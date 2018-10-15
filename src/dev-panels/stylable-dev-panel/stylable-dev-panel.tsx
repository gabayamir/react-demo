import * as React from 'react';
import {StylableDemoComponent} from "../../components/stylable-demo-component/stylable-demo-component";
import style from './stylable-dev-panel.st.css'

export class StylableDevPanel extends React.Component {
    render() {
        return (
            <div>
                <StylableDemoComponent
                    className={style['my-stylable-demo-component']}
                    text="Gabay"
                />
            </div>
        );
    }
}

