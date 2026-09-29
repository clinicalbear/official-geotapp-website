#!/usr/bin/env python3
"""Carica i due mu-plugin sul blog (SFTP IONOS) con rinomina atomica e controlla che il blog risponda.
Uso: python3 carica.py        (rientro: python3 carica.py --rollback)
La password SFTP e' letta dalla memoria reference_blog_geotapp_credentials.md."""
import paramiko, re, sys, os, urllib.request
HERE = os.path.dirname(os.path.abspath(__file__))
MEM = os.path.expanduser('~/.claude/projects/-mnt-disco-secondario-GeoTapp-EcoSystem/memory/reference_blog_geotapp_credentials.md')
txt = open(MEM).read()
pw = (re.search(r"\*\*Password:\*\*\s*`([^`]+)`", txt) or re.search(r"SSHPASS='([^']+)'", txt)).group(1)
t = paramiko.Transport(('access-5018990701.webspace-host.com', 22)); t.connect(username='su326249', password=pw)
s = paramiko.SFTPClient.from_transport(t); D = 'blog/wp-content/mu-plugins/'
if '--rollback' in sys.argv:
    s.remove(D + 'gt-lang-lock-comment-notify.php')
    s.posix_rename(D + 'geotapp-language-guard.php.bak-20260929', D + 'geotapp-language-guard.php')
    print('rientro fatto')
else:
    names = s.listdir(D)
    if 'geotapp-language-guard.php.bak-20260929' not in names:
        s.get(D + 'geotapp-language-guard.php', '/tmp/guard-prod-backup.php')
        s.put('/tmp/guard-prod-backup.php', D + 'geotapp-language-guard.php.bak-20260929')
    for n in ['gt-lang-lock-comment-notify.php', 'geotapp-language-guard.php']:
        s.put(os.path.join(HERE, n), D + n + '.tmp'); s.posix_rename(D + n + '.tmp', D + n)
    print('caricati:', sorted(x for x in s.listdir(D) if 'lang' in x))
t.close()
for u in ['https://geotapp.com/blog/wp-json/wp/v2/posts/?per_page=1&_fields=id', 'https://geotapp.com/blog/nl/2026/06/04/cao-schoonmaak-2026-loon-marge/']:
    try: print(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'}), timeout=30).status, u)
    except Exception as e: print('ERRORE', u, e, '-> lancia: python3 carica.py --rollback')
