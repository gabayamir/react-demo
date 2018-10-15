import * as React from "react";
import * as ReactDOM from "react-dom";

// import {ComponentLoadingView} from "./components/component-loading-view/component-loading-view";
import {StylableDemoComponent} from "./components/stylable-demo-component/stylable-demo-component";
import {StylableDevPanel} from "./dev-panels/stylable-dev-panel/stylable-dev-panel";

// ReactDOM.render(
//     <ComponentLoadingView>
//         {{
//             loadableComponent: <div>Row 1</div>,
//             loadingComponent: <div>Row 2</div>
//         }}
//     </ComponentLoadingView>,
//     document.getElementById("example")
// );

ReactDOM.render(
    <div>
        <StylableDevPanel/>
    </div>,
    document.getElementById("example")
);
