import * as React from "react";

import { ScrollMode, Viewer, Worker } from "@react-pdf-viewer/core";

import {
  RenderSwitchScrollModeProps,
  scrollModePlugin,
} from "@react-pdf-viewer/scroll-mode";
import {
  RenderCurrentScaleProps,
  RenderZoomInProps,
  RenderZoomOutProps,
  zoomPlugin,
} from "@react-pdf-viewer/zoom";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

const PdfViewer = ({ url }) => {
  const scrollModePluginInstance = scrollModePlugin();
  const zoomPluginInstance = zoomPlugin();

  const { SwitchScrollModeButton } = scrollModePluginInstance;
  const { CurrentScale, ZoomInButton, ZoomOutButton } = zoomPluginInstance;

  // const scrollModePluginInstance = scrollModePlugin();
  //   const zoomPluginInstance = zoomPlugin();

  const { SwitchScrollMode } = scrollModePluginInstance;
  const { ZoomIn, ZoomOut } = zoomPluginInstance;

  return (
    <>
      {/* <div className="dashboard-wrapper">
        <div className="col-xl-10"> */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            height: "720px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#eeeeee",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <div style={{ padding: "0px 2px" }}>
              <SwitchScrollModeButton mode={ScrollMode.Vertical} />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <SwitchScrollModeButton mode={ScrollMode.Horizontal} />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <SwitchScrollModeButton mode={ScrollMode.Wrapped} />
            </div>

            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <ZoomOutButton />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <CurrentScale />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomInButton />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              overflow: "hidden",
            }}
          >
            <Viewer
              fileUrl={`/assets/${url}`}
              plugins={[scrollModePluginInstance, zoomPluginInstance]}
            />
          </div>
        </div>
      </Worker>
      {/* </div>
      </div> */}
    </>
  );
};

export default PdfViewer;
