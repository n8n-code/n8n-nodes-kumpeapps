import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class KumpeappsApi implements ICredentialType {
        name = 'N8nDevKumpeappsApi';

        displayName = 'Kumpeapps API';

        icon: Icon = { light: 'file:../nodes/Kumpeapps/kumpeapps.svg', dark: 'file:../nodes/Kumpeapps/kumpeapps.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://restapi.kumpeapps.com/v5',
                        description: 'The base URL of your Kumpeapps API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-Auth': '={{$credentials.apiKey}}',
                        },
                },
        };


}
