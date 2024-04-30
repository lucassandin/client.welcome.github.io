# Welcome React App

Welcome to the Welcome React App! This is a simple project developed with ReactJS using Next.js. The application displays random welcome messages on each screen load. It runs on port 3000 and can be executed locally using the "dev" script from the package.json. In production, use the "start" script.

## How to Run Locally

To run locally, follow the steps below:

1. Make sure you have Node.js installed on your machine.
2. Clone the repository:

```bash
git clone https://github.com/seu-usuario/welcome-react-app.git
```

3. Navigate to the project directory:

```bash
cd welcome-react-app
```

4. Install dependencies:

```bash
npm install
```

or

```bash
yarn
```

5. Run the project in development mode:

```bash
npm run dev
```

or

```bash
yarn dev
```

6. Open your browser and access [http://localhost:3000](http://localhost:3000) to see the application running.

## How to Use

The application displays a random welcome message each time it is loaded. Simply access [http://localhost:3000](http://localhost:3000) in your browser to view the messages.

## Technologies Used

- Framework: ReactJS with Next.js
- Programming Language: JavaScript (ES6+)

## Helm usage

[Helm](https://helm.sh) must be installed to use the charts. Please refer to
Helm's [documentation](https://helm.sh/docs) to get started.

Once Helm has been set up correctly, add the repo as follows:

helm repo add welcome-client https://lucassandin.github.io/client.welcome.github.io/charts

If you had already added this repo earlier, run `helm repo update` to retrieve
the latest versions of the packages. You can then run `helm search repo
welcome-client` to see the charts.

To install the welcome-client chart:

    helm install welcome-client welcome-client/welcome-client

To uninstall the chart:

    helm delete welcome-client

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

If you have any questions or suggestions, feel free to contact us! 😊
