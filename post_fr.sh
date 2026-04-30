#!/bin/bash
# Create all 7 FR blog posts on WordPress
B="/mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site"
AUTH="Mike Petraroli:BsIE JwnK 7UIn dT1u LsGm EeUO"
API="https://geotapp.com/blog/wp-json/wp/v2/posts/"

create_post() {
    local num=$1 title=$2 slug=$3 date=$4 cats=$5
    jq -n --rawfile c "$B/fr_c${num}.html" \
        --arg t "$title" --arg s "$slug" --arg d "$date" \
        --argjson cats "$cats" \
        '{title:$t,slug:$s,date:$d,status:"future",categories:$cats,content:$c}' \
    | curl -sL -X POST "$API" -u "$AUTH" -H "Content-Type: application/json" -d @- \
    | jq -r '"\(.id) \(.slug) \(.date) \(.status)"'
}

echo "=== Creating 7 FR posts ==="

echo -n "Post 1: "; create_post 1 "Applications professionnelles non conformes au RGPD : les risques dans le field service" "applications-non-conformes-rgpd-risques-field-service" "2026-05-20T08:30:00" "[10351,3767]"

echo -n "Post 2: "; create_post 2 "Sous-traitance et responsabilite : qui repond si l operateur ne trace pas" "sous-traitance-responsabilite-operateur-tracabilite" "2026-05-27T08:30:00" "[10351,3767]"

echo -n "Post 3: "; create_post 3 "Intervention non enregistree : les revenus qui disparaissent dans le nettoyage sans preuves" "intervention-non-enregistree-revenus-nettoyage-preuves" "2026-05-27T08:30:00" "[10353]"

echo -n "Post 4: "; create_post 4 "Equipe incomplete chez le client : comment la confiance se perd en cascade" "equipe-incomplete-client-confiance-cascade" "2026-05-27T15:00:00" "[10353]"

echo -n "Post 5: "; create_post 5 "La bonne photo au mauvais client : le chaos du nettoyage multisite" "bonne-photo-mauvais-client-chaos-nettoyage-multisite" "2026-05-29T08:30:00" "[10353]"

echo -n "Post 6: "; create_post 6 "Application pour entreprise de nettoyage : les fonctions essentielles contre les contestations" "application-entreprise-nettoyage-fonctions-contestations" "2026-05-29T15:00:00" "[10353]"

echo -n "Post 7: "; create_post 7 "PME et digitalisation : le fosse qui coute 15 pourcent du chiffre d affaires" "pme-digitalisation-fosse-cout-chiffre-affaires" "2026-06-03T08:30:00" "[10351,3767]"

echo "=== Done ==="
