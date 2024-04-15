import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { LogoPeriod } from '../../assets/svg/svg';
import './index.css';

export default function NavBarSignedOut() {
    const dispatch = useDispatch();
    const modals = useSelector((state) => state.modal)
    return (
        <div className="signed-out-new">
            <div className="logo-new">
                <h1 id="logo-text">TENNER</h1>
                <LogoPeriod width={10} height={10} />
            </div>
            <h1>This is the navbar signed out</h1>
        </div>
    );
}
