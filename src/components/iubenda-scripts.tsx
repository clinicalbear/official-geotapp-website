"use client";

import { useEffect } from "react";

const CONFIG_SNIPPET = () => {
  const script = document.createElement("script");
  script.innerHTML =
    'var _iub = _iub || [];_iub.csConfiguration = {"siteId":4315908,"cookiePolicyId":36941058,"lang":"it","storage":{"useSiteId":true}};';
  script.id = "iubenda-inline-config";
  document.body.appendChild(script);
  return script;
};

const EXTERNAL_SCRIPTS = [
  "https://cs.iubenda.com/autoblocking/4315908.js",
  "https://cdn.iubenda.com/cs/gpp/stub.js",
  "https://cdn.iubenda.com/cs/iubenda_cs.js",
];

export function IubendaScripts() {
  useEffect(() => {
    const configScript = CONFIG_SNIPPET();
    const appendedScripts = EXTERNAL_SCRIPTS.map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.defer = true;
      script.dataset.iubenda = "true";
      document.body.appendChild(script);
      return script;
    });

    return () => {
      configScript.remove();
      appendedScripts.forEach((script) => script.remove());
    };
  }, []);

  return null;
}
