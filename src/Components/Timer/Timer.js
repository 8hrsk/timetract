import './Timer.css'
import { useState } from 'react';

function Timer() {
    const [time, setTime] = useState(0);

    let timer = "00:00:00";

    return (
        <div className="Timer">
            <div>
                {timer}
            </div>
        </div>
    );
}

export default Timer;