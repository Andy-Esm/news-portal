import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import '../styles/common.css';
import App from './components/App/App';

const rootElement = document.getElementById('root');
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<BrowserRouter>
			<StrictMode>
				<App />
			</StrictMode>
		</BrowserRouter>
	);
}
