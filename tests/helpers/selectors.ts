export const SEL = {
  nav: {
    docs: { role: 'link' as const, name: /^Docs$/i },
    searchButton: { role: 'button' as const, name: /search/i }
  },
  docs: {
    h1: 'article h1, main h1',
    codeBlock: 'pre code',
    assertions: { role: 'link' as const, name: /Assertions/i },
    traceViewer: { role: 'link' as const, name: /Trace Viewer/i },
    runningTests: { role: 'link' as const, name: /Running tests|Running and debugging tests/i }
  }
};
