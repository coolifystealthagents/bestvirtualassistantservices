'use client';

import { useEffect } from 'react';

const EXCLUDED_ELEMENTS = new Set([
  'CODE', 'INPUT', 'NOSCRIPT', 'PRE', 'SCRIPT', 'STYLE', 'TEXTAREA',
]);

function isProtectedTextNode(node: Text) {
  let element = node.parentElement;
  while (element) {
    if (EXCLUDED_ELEMENTS.has(element.tagName) || element.hasAttribute('data-preserve-punctuation')) return true;
    element = element.parentElement;
  }
  return false;
}

export function normalizeVisiblePunctuation(value: string) {
  return value
    .replace(/\s+[—–]\s+/g, ', ')
    .replace(/[—–]/g, '-')
    .replace(/\s+--\s+/g, ' - ')
    .replace(/--/g, '-');
}

function sanitizeTextNode(node: Text) {
  if (isProtectedTextNode(node) || !/[—–]|--/.test(node.data)) return;
  const normalized = normalizeVisiblePunctuation(node.data);
  if (normalized !== node.data) node.data = normalized;
}

function sanitizeSubtree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    sanitizeTextNode(root as Text);
    return;
  }
  if (!(root instanceof Element) || EXCLUDED_ELEMENTS.has(root.tagName) || root.hasAttribute('data-preserve-punctuation')) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    sanitizeTextNode(current as Text);
    current = walker.nextNode();
  }
}

export function VisiblePunctuationSanitizer() {
  useEffect(() => {
    // Effects run only after hydration, so server markup remains hydration-safe.
    sanitizeSubtree(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') sanitizeTextNode(mutation.target as Text);
        for (const node of mutation.addedNodes) sanitizeSubtree(node);
      }
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
