/**
 * bridge.js — DIVEROID WebView Bridge + Language Detection
 * Shared across all CS pages.
 */

// ── Bridge functions (called by app via JS, or by HTML buttons) ──────────────

function closePage() {
  var msg = JSON.stringify({ type: "close" });
  window.ReactNativeWebView
    ? window.ReactNativeWebView.postMessage(msg)
    : history.back();
}

function openInquiry() {
  var msg = JSON.stringify({ type: "navigate", screen: "Inquiry" });
  window.ReactNativeWebView
    ? window.ReactNativeWebView.postMessage(msg)
    : (window.location.href = "mailto:support@diveroid.com");
}

function handleBridge(e) {
  try {
    var m = JSON.parse(e.data);
    if (m.type === "setLang" && typeof window.__setLang === "function") {
      window.__setLang(m.lang);
    }
    if (m.type === "setTab" && typeof window.__setTab === "function") {
      window.__setTab(m.tab);
    }
  } catch (err) {}
}

window.addEventListener("message", handleBridge);
document.addEventListener("message", handleBridge);

// ── Language detection ────────────────────────────────────────────────────────

/**
 * Detect language from URL param (?lang=ko) or navigator.language.
 * Returns "ko" or "en".
 */
function initLang() {
  var p = new URLSearchParams(window.location.search).get("lang");
  if (p === "ko" || p === "en") return p;
  if ((navigator.language || "").startsWith("ko")) return "ko";
  return "en";
}

/**
 * Register page-level setLang / setTab so bridge.js handleBridge can call them.
 * Each page calls this after defining its own setLang (and optionally setTab).
 */
function onBridgeMessage(type, handler) {
  if (type === "setLang") window.__setLang = handler;
  if (type === "setTab") window.__setTab = handler;
}
