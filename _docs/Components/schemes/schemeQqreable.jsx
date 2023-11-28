import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export const componentQreable = {
  "tabs": [
    {
      "title": "Data",
      "table": {
        "data": [
          [
            'loading',
            { type: <code>Boolean</code>, description: 'Indicate if information is currently being loaded.' }
          ],
          [
            'showModal',
            { type: <code>Boolean</code>, description: 'Controls whether the modal is displayed.' }
          ],
          [
            'masterActions',
            { type: <code>Array</code>, description: 'Array of actions to be passed to the master modal.' },
          ]
        ]
      }
    },
    {
      "title": "Computed",
      "table": {
        "data": [
          [
            'modalTitle',
            { description: <>Returns the title of the modal. If this.props.title has a value, it will be used; otherwise, the translation $tr with the key <code>iqreable.cms.form.title</code> will be used.</> }
          ],
          [
            'dinamycConfig',
            { description: <>Returns an object representing the configuration for a dynamic-field component. This object has a <code>value</code> property that takes the value of <code>this.props.content</code>, a <code>copy</code> type, and additional properties such as the label obtained from the translation <code>$trp('iqreable.cms.form.content')</code>.</> }
          ]
        ]
      }
    },
    {
      "title": "Methods",
      "table": {
        "data": [
          [
            'downloadFile',
            { description: <>This method is responsible for downloading a file based on the information provided in the file object. It dynamically creates a link, sets the URL and file name, adds it to the document body, simulates a click on the link to initiate the download, and finally removes the link after a short period (<code>setTimeout</code>)</> }
          ],
          [
            'show',
            { description: 'This method displays the modal and assigns the QR code data (qr) to the props property. Additionally, it sets the showModal flag to true to make the modal visible.' }
          ],
          [
            'generate',
            { description: <>This method generates a new QR code based on the information provided in the contentQR object. It checks if certain fields (<code>{`{ title, zone, content }`}</code>) have a length greater than 2. If so, it creates a params object using the data from contentQR and makes a creation request through <code>$crud.create</code>. After the creation, it emits the <code>created</code> event and displays an alert message depending on the result.</>},
          ]
        ]
      }
    },
  ]
}
