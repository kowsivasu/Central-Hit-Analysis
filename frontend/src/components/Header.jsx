import { Activity } from 'lucide-react';
import './Header.css';

function Header(){
    return (

        <header className="main-header">
            <div className="header-brand">
                <div className="brand-icon">
                    <Activity size={26} />
                </div>

                <div className="brand-info">
                    <h1>Central Hit Analysis</h1>
                    <p>Central Monitoring Platform</p>
                </div>
            </div>
            
        </header>
    );
}
export default Header;