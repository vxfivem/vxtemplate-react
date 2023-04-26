const esbuild = require('esbuild');
const { esbuildPluginDecorator } = require('esbuild-plugin-decorator');

(async () => {
  const { default: chalk } = await import('chalk');
  const shouldWatch = process.argv.includes('--watch');

  const context = await esbuild.context({
    entryPoints: ['./src/index.ts'],
    tsconfig: './tsconfig.json',
    bundle: true,
    outfile: '../../../server.js',
    target: ['chrome58'],
    minify: !shouldWatch,
    format: 'iife',
    platform: 'node',
    keepNames: true,
    plugins: [
      esbuildPluginDecorator({
        tsconfigPath: './tsconfig.json',
      }),
    ],
  });

  if (shouldWatch) {
    await context.watch({});
    console.log(chalk.green('[server] rebuilding server in watch mode'));
  } else {
    await context.rebuild();
    console.log(chalk.green('[server] built server successfully'));
    process.exit(0);
  }
})();
