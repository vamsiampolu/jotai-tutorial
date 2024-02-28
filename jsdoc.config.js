// @ts-check
export default {
  source: {
    include: 'src/**/*\\.(jsx|js|ts|tsx)$',
  },
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc', 'closure'],
  },
  plugins: [
    'plugins/markdown',
    'better-docs/component',
    'better-docs/typescript',
  ],
  opts: {
    destination: 'docs',
    readme: 'Readme.md',
    recurse: true,
    template: 'node_modules/better-docs',
  },
};
