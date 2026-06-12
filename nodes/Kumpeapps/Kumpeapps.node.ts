import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authenticationDescription } from './resources/authentication';
import { kKidDescription } from './resources/k-kid';

export class Kumpeapps implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Kumpeapps',
                name: 'N8nDevKumpeapps',
                icon: { light: 'file:./kumpeapps.svg', dark: 'file:./kumpeapps.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'KKid API requires authentication. Use KumpeApps credentials. Request access via...',
                defaults: { name: 'Kumpeapps' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevKumpeappsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Authentication",
					"value": "Authentication",
					"description": "Authenticate KumpeApps users (required to get apiKey)"
				},
				{
					"name": "K Kid",
					"value": "K Kid",
					"description": "KKid API Functions"
				}
			],
			"default": ""
		},
		...authenticationDescription,
		...kKidDescription
                ],
        };
}
