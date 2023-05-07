
import { resolve } from "node:path";

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin, TypeScriptLinter } = EsLint
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({command, mode, ssrBuild}) => {
	if (command === 'serve') { 
		return ({
			plugins: [
				react(),
				tsConfigPaths({ root: 'src' }),
				linterPlugin({
					include: ['.\src\components\**\*.{ts,tsx}', '.\app\**\*.{ts,tsx}'],
					exclude: ['.\src\index.d.ts'],
					linters: [new EsLinter({ configEnv: {command, mode, ssrBuild}}), new TypeScriptLinter()],
				}),
			],
			resolve: {
				alias: [
					{
						find: "@styles", replacement: resolve(__dirname, "./src/styles/"),
					},
					{
						find: "adapt-it-library", replacement: resolve(__dirname, "./src/index.ts"),
					},
				],
			}
		})
	} else {
		return ({
			plugins: [
				react(),
				tsConfigPaths(),
				linterPlugin({
					include: ['./src/**/*.{ts,tsx}'],
					linters: [new EsLinter({ configEnv: {command, mode, ssrBuild}}), new TypeScriptLinter()],
				}),
				dts({
					include: ['src'],
				}),
			],
			build: {
				lib: {
					entry: resolve('src', 'index.ts'),
					name: 'adapt-it-library',
					formats: ['es', 'umd'],
					fileName: (format) => `adapt-it-library.${format}.js`,
				},
				rollupOptions: {
					external: [...Object.keys(packageJson.peerDependencies)],
				},
			},
			resolve: {
				alias: [
					{
						find: "@styles", replacement: resolve(__dirname, "./src/styles"),
					},
				],
			}
		});
	}
})