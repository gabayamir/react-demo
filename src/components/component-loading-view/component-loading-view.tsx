import * as React from "react";
import {ReactElement, ReactNode} from "react";
import {findFirst, map} from '../../utils/array-utils';
import * as Utils from "lodash";

type Props =
{
    children: {
        loadableComponent: ReactElement<any>;
        loadingComponent: ReactElement<any>;
    }
};

export class ComponentLoadingView extends React.Component<Props, {}> {

    render() {

        const {
            loadableComponent,
            loadingComponent
        } = this.props.children;

        const loadableComponent2 = React.cloneElement(loadableComponent, {
            onClick: function () {
                alert(`sadf`);
            }
        });

        return (
            <div>
                {loadableComponent2}
                <div>Separator!!</div>
                {loadingComponent}
            </div>
        );
    }
}