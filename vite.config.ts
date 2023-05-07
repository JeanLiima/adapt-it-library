
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
					include: [ resolve(__dirname, "src/**/*.{ts,tsx}"), resolve(__dirname, "app/**/*.{ts,tsx}")],
					exclude: [ resolve(__dirname, "./dist")],
					linters: [
						new EsLinter({ configEnv: {command, mode, ssrBuild}})
					],
					build: {
						includeMode: "filesInFolder",
					}
				}),
			],
			resolve: {
				alias: [
					{
						find: "@styles", replacement: resolve(__dirname, "./src/styles/"),
					},
					{
						find: "adapt-it-library", replacement: resolve(__dirname, "dist/adapt-it-library.es.js"),
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
					include: ['./src/**/*.{ts,tsx}', './typings'],
					linters: [
						new EsLinter({ configEnv: {command, mode, ssrBuild}}), 
					],
				}),
				dts({
					include: ['src'],
					exclude: ['app']
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