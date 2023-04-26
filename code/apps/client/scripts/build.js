const esbuild = require('esbuild');
const { esbuildPluginDecorator } = require('esbuild-plugin-decorator');

(async () => {
  const { default: chalk } = await import('chalk');
  const shouldWatch = process.argv.includes('--watch');

  const context = await esbuild.context({
    entryPoints: ['./src/index.ts'],
    tsconfig: './tsconfig.json',
    bundle: true,
    outfile: '../../../client.js',
    target: ['chrome58'],
    minify: false,
    format: 'iife',
    platform: 'browser',
    keepNames: true,
    plugins: [
      esbuildPluginDecorator({
        tsconfigPath: './tsconfig.json',
      }),
    ],
  });

  if (shouldWatch) {
    await context.watch({});
    console.log(chalk.green('[client] rebuilding in watch mode'));
  } else {
    await context.rebuild();
    console.log(chalk.green('[client] built successfully'));
    process.exit(0);
  }
})();
