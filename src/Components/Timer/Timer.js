import './Timer.css'
import { useState } from 'react';

function Timer() {
    const [time, setTime] = useState(0);

    return (
        <div className="Timer">
            <div>
                00:00:00
            </div>
        </div>
    );
}

export default Timer;