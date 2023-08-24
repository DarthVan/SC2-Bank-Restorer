import reactPlugin from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { BuildOptions, ConfigEnv, defineConfig } from 'vite';
import pkg from "./package.json" assert { type: "json" };

const date: string = (new Date()).toUTCString().replace(/GMT/g, 'UTC');

export default defineConfig((params: ConfigEnv) => {
	return {
		base: './',
		root: 'src',
		publicDir: '../public',
		cacheDir: 'A:/vite-cache',
		build: getBuildOptions(),
		resolve: {
			alias: [
				{ find: '@src', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
			],
		},
		plugins: [
			reactPlugin({
				include: '**/*.{jsx,tsx}',
			})
		],
		server: {
			port: 8080,
			host: 'localhost',
			hmr: true,
		},
		preview: {
			port: 8080,
			host: 'localhost',
		},
		optimizeDeps: {
			esbuildOptions: {
				sourcemap: false,
			}
		}
	};
});

// Making good file structure
function getBuildOptions(): BuildOptions {
	return {
		outDir: 'A:/' + pkg.name,
		//assetsDir: 'scripts',
		emptyOutDir: true,
		sourcemap: false,
		rollupOptions: {
			output: {
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',

				assetFileNames: ({ name }) => {
					/* if (/\.(gif|jpe?g|png|svg)$/.test(name ?? ''))
						return 'assets/images/[name]-[hash][extname]'; */

					if (/\.css$/.test(name ?? ''))
						return 'css/[name]-[hash][extname]';

					return 'assets/[name]-[hash][extname]';
				},

				banner: (chunk): string => {
					const banner: string = '/*!\n * ' + pkg.name + ' v.' + pkg.version +
						'\n *\n * Compiled from:\n *\n' +
						chunk.moduleIds.map((moduleId: string): string => {
							const str: string = moduleId.replaceAll(
								// eslint-disable-next-line no-control-regex
								/[\u0000-\u001F\u007F-\u009F]/g,
								'',
							).trim();
							let index: number = str.indexOf(pkg.name);
							index = index < 0 ? str.indexOf('node_modules') : index;
							return ' * ' + str.substring(index);
						}).join('\n') +
						'\n *\n * Сompiled on ' + date + '\n */';
					return banner;
				},
			},
		}
	}
}