module.exports = {
  ci: {
    collect: {
      staticDistDir: './staticDistDir',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: .8}],
        'categories:accessibility': ['error', {minScore: .8}],
        'categories:best-practices': ['error', {minScore: .8}],
        'categories:seo': ['error', {minScore: .8}],
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}