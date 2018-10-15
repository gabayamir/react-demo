import * as React from 'react';
import style from './stylable-demo-component.st.css';

interface Props
{
    text: string;
    className: string;
}

export class StylableDemoComponent extends React.Component<Props> {
    render() {
        return (
            <div
                {...style('root', {}, this.props)}
            >
                {this.props.text}
                <div
                    {...style.$cssStates({loading: true})}
                >Footer</div>
            </div>
        );

        // return (
        //     <div
        //         className={style.root + ' ' + this.props.className}
        //     >
        //         {this.props.text}
        //         <div className={style.footer}>Footer</div>
        //     </div>
        // );
    }
}

