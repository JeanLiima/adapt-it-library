
import { resolve } from "node:path";

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({command, mode, ssrBuild}) => {
	if (command === 'serve') { 
		return ({
			plugins: [
				react(),
				tsConfigPaths(),
				linterPlugin({
					include: ['./src/**/*.{ts,tsx}'],
					linters: [new EsLinter({ configEnv: {command, mode, ssrBuild}})],
				}),
			],
			resolve: {
				alias: [
					{
						find: "@", replacement: resolve(__dirname, "./src/styles"),
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
					linters: [new EsLinter({ configEnv: {command, mode, ssrBuild}})],
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
						find: "@", replacement: resolve(__dirname, "./src/styles"),
					},
				],
			}
		});
	}
})