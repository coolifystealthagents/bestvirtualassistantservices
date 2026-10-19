export function resolveVisitorProtocol(cfVisitor, forwardedProtocol, requestProtocol) {
  let cloudflareProtocol;
  if (cfVisitor) {
    try {
      const parsed = JSON.parse(cfVisitor);
      if (parsed?.scheme === 'http' || parsed?.scheme === 'https') cloudflareProtocol = parsed.scheme;
    } catch {
      // Malformed proxy metadata is ignored in favor of the trusted fallback.
    }
  }

  const forwardedValue = forwardedProtocol?.split(',')[0]?.trim().toLowerCase();
  const forwarded = forwardedValue === 'http' || forwardedValue === 'https' ? forwardedValue : undefined;
  const fallback = requestProtocol.replace(':', '').toLowerCase();
  return cloudflareProtocol || forwarded || fallback;
}

export function buildCanonicalDestination(pathname, search) {
  const destination = new URL('https://bestvirtualassistantservices.com');
  destination.pathname = pathname;
  destination.search = search;
  return destination;
}
