import WeatherWidget from "./lib/components/WeatherWidget";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header ">
                <WeatherWidget apiKey='YOUR-API-KEY' autoLocate="gps"/>
            </header>
        </div>

    );
}

export default App;
