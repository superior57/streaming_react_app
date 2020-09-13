import FuseHighlight from '@fuse/core/FuseHighlight';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function IDEsDoc() {
	return (
		<FusePageSimple
			header={
				<div className="flex flex-1 items-center justify-between p-24">
					<div className="flex flex-col">
						<div className="flex items-center mb-16">
							<Icon className="text-18" color="action">
								home
							</Icon>
							<Icon className="text-16" color="action">
								chevron_right
							</Icon>
							<Typography color="textSecondary">Documentation</Typography>
							<Icon className="text-16" color="action">
								chevron_right
							</Icon>
							<Typography color="textSecondary">Working with Fuse React</Typography>
						</div>
						<Typography variant="h6">IDEs (Webstorm, VSCode)</Typography>
					</div>
				</div>
			}
			content={
				<div className="p-24 max-w-2xl">
					<Typography className="mt-32 mb-8" variant="h5">
						Webstorm
					</Typography>

					<Typography className="mt-32 mb-8" variant="h6">
						Yarn 2 with PnP (yarnpkg/berry v2+)
					</Typography>

					<Typography className="mb-16" component="p">
						If you are using IntelliJ/WebStorm, you should use <b>v2020.1+</b> for to use Yarn 2 with PnP.
					</Typography>

					<Typography className="mt-32 mb-8" variant="h6">
						Using Prettier with ESLint
					</Typography>

					<Typography className="mb-16" component="p">
						We are using ESLint with <b>eslint-plugin-prettier</b>. You should use the{' '}
						<b>Fix ESLint Problems</b> action to reformat the current file/folder – find it using Find
						Action (Cmd/Ctrl-Shift-A) or add a keyboard shortcut to it in <b>Preferences | Keymap</b> and
						then use it. Make sure that the <b>ESLint integration</b> is enabled in{' '}
						<b>Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint</b>.
					</Typography>

					<Typography className="mt-64 mb-8" variant="h5">
						Visual Studio Code (VSCode)
					</Typography>

					<Typography className="mt-32 mb-8" variant="h6">
						Yarn 2 with PnP (yarnpkg/berry v2+)
					</Typography>

					<Typography className="mb-16" component="p">
						If you are using VSCode, for yarn 2 integration you should run
						<code>yarn pnpify-sdk</code>{' '}
						<i>We have already added "@yarnpkg/pnpify" into the devDependencies</i>.
					</Typography>

					<Typography className="mt-32 mb-8" variant="h6">
						Using Prettier with ESLint
					</Typography>

					<Typography className="mb-16" component="p">
						You need to install <b>ESLint</b> and <b>Prettier</b> plugins - can be installed using the
						extension sidebar in VSCode
					</Typography>

					<Typography className="mb-16" component="p">
						Here is the example <b>settings.json</b> configuration. With this configuration, fixes will be
						applied whenever file is saved.
					</Typography>

					<FuseHighlight component="pre" className="language-json mb-24">
						{`
							"editor.defaultFormatter": "esbenp.prettier-vscode",
							"[javascript]": {
								"editor.defaultFormatter": "esbenp.prettier-vscode"
							},
							"eslint.alwaysShowStatus": true,
							"editor.formatOnSave": true,
							"editor.formatOnPaste": true,
							"eslint.format.enable": true,
							"editor.codeActionsOnSave": {
								"source.fixAll.eslint": true
							}
						`}
					</FuseHighlight>
				</div>
			}
		/>
	);
}

export default IDEsDoc;
