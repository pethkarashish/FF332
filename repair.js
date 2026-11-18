const path = require('path');

module.exports = () =>
{
	const config =
	{
		run:
		[
			{
				method: 'shell.run',
				params:
				{
					message: 'python -m pip install requests',
					path: 'facefusion',
					conda:
					{
						path: path.resolve(__dirname, '.env')
					}
				}
			},
			{
				method: 'input',
				params:
				{
					title: 'Dependency repaired',
					description: 'Return to the dashboard and run FaceFusion again.'
				}
			}
		]
	};

	return config;
};
