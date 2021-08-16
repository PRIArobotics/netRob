require("source-map-support").install();
exports.id = 1;
exports.modules = {

/***/ "./src/components/ide/FileTree/FileMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/misc/palette.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/FileTree/FileMenu.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  createFolder: {
    "id": "app.ide.file_menu.create_folder",
    "defaultMessage": "New Folder"
  },
  createJavascriptFile: {
    "id": "app.ide.file_menu.create_js_file",
    "defaultMessage": "New Javascript File"
  },
  createBlocklyFile: {
    "id": "app.ide.file_menu.create_blockly_file",
    "defaultMessage": "New Blockly File"
  },
  createMarkdownFile: {
    "id": "app.ide.file_menu.create_markdown_file",
    "defaultMessage": "New Markdown File"
  },
  createPluginsDirectory: {
    "id": "app.ide.file_menu.create_plugins_directory",
    "defaultMessage": "Create Plugin Folder"
  },
  createAssetsDirectory: {
    "id": "app.ide.file_menu.create_assets_directory",
    "defaultMessage": "Create Assets Folder"
  },
  createSimulatorConfiguration: {
    "id": "app.ide.file_menu.create_simulator_configuration",
    "defaultMessage": "Create Simulator Configuration"
  },
  createLayoutConfiguration: {
    "id": "app.ide.file_menu.create_layout_configuration",
    "defaultMessage": "Create/Update Workspace Layout Configuration"
  },
  createToolboxConfiguration: {
    "id": "app.ide.file_menu.create_toolbox_configuration",
    "defaultMessage": "Create Toolbox Configuration"
  },
  create3DSimulationConfig: {
    "id": "app.ide.file_menu.create_3DSimulation_config",
    "defaultMessage": "Create 3D Simulation Config"
  },
  rename: {
    "id": "app.ide.file_menu.rename",
    "defaultMessage": "Rename"
  },
  delete: {
    "id": "app.ide.file_menu.delete",
    "defaultMessage": "Delete"
  },
  upload: {
    "id": "app.ide.file_menu.upload",
    "defaultMessage": "Upload"
  },
  download: {
    "id": "app.ide.file_menu.download",
    "defaultMessage": "Download"
  }
});
const FileMenuItem = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](({
  titleMsg,
  icon: TheIcon,
  ...props
}, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
  ref: ref
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TheIcon, {
  fontSize: "small",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 9
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, titleMsg, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 7
  }
}))));

class FileMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false,
      config: null
    });
  }

  show(anchorPosition, file) {
    this.setState({
      visible: true,
      config: {
        anchorPosition,
        file
      }
    });
  }

  hide() {
    this.setState({
      visible: false
    });
  }

  action(mkAction) {
    // eslint-disable-next-line no-throw-literal
    if (!this.state.visible) throw 'menu is not shown'; // eslint-disable-next-line no-throw-literal

    if (this.state.config === null) throw 'unreachable';
    const {
      config: {
        file
      }
    } = this.state;
    const action = mkAction(file);
    this.hide();
    this.props.onFileAction(action);
  }

  handleCreate(desc) {
    this.action(file => {
      // $FlowExpectError
      const parentDir = file;
      return {
        action: 'CREATE',
        parentDir,
        desc
      };
    });
  }

  handleRename() {
    this.action(file => ({
      action: 'RENAME',
      file
    }));
  }

  handleDelete() {
    this.action(file => ({
      action: 'DELETE',
      file
    }));
  }

  handleDownload() {
    this.action(file => ({
      action: 'DOWNLOAD',
      file
    }));
  }

  handleUpload() {
    this.action(file => {
      // $FlowExpectError
      const parentDir = file;
      return {
        action: 'UPLOAD',
        parentDir
      };
    });
  }

  render() {
    // this will only trigger before the first showing.
    // after that, the old config is still present and will ensure that
    // fade out animations won't glitch due to changing contents.
    if (this.state.config === null) return null;
    const {
      visible,
      config: {
        anchorPosition,
        file
      }
    } = this.state;
    const isRoot = file.path === '.';
    const isLeaf = !file.file.isDirectory();
    const isMetadata = file.path === './.metadata' && !isLeaf;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
      keepMounted: true,
      anchorReference: "anchorPosition",
      anchorPosition: anchorPosition,
      open: visible,
      onClose: () => this.hide(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 7
      }
    }, [...(!isLeaf ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_directory",
      titleMsg: messages.createFolder,
      onClick: () => this.handleCreate({
        type: 'DIRECTORY'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["FolderIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }
    }), ...(isMetadata ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_plugins_directory",
      titleMsg: messages.createPluginsDirectory,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'plugins',
        fileType: 'DIRECTORY'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataPluginsIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_assets_directory",
      titleMsg: messages.createAssetsDirectory,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'assets',
        fileType: 'DIRECTORY'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataAssetsIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_3DSimulation_config",
      titleMsg: messages.create3DSimulationConfig,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: '3DSimulationConfig',
        fileType: 'File'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataLayoutIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_layout_config",
      titleMsg: messages.createLayoutConfiguration,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'layout',
        fileType: 'FILE'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataLayoutIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_simulator_config",
      titleMsg: messages.createSimulatorConfiguration,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'simulator',
        fileType: 'FILE'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataSimulatorIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_toolbox_config",
      titleMsg: messages.createToolboxConfiguration,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'toolbox',
        fileType: 'FILE'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataToolboxIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 23
      }
    })] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_js_file",
      titleMsg: messages.createJavascriptFile,
      onClick: () => this.handleCreate({
        type: 'FILE',
        extension: '.js'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["LanguageJavascriptIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_blockly_file",
      titleMsg: messages.createBlocklyFile,
      onClick: () => this.handleCreate({
        type: 'FILE',
        extension: '.blockly'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["LanguageBlocklyIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_md_file",
      titleMsg: messages.createMarkdownFile,
      onClick: () => this.handleCreate({
        type: 'FILE',
        extension: '.md'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MarkdownFileIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 23
      }
    })]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: "divider-directory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 17
      }
    })] : []), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "rename",
      titleMsg: messages.rename,
      onClick: () => this.handleRename(),
      disabled: isRoot,
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["RenameIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "delete",
      titleMsg: messages.delete,
      onClick: () => this.handleDelete(),
      disabled: isRoot,
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["DeleteIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: "divider-upload-download",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 11
      }
    }), ...(!isLeaf ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "upload",
      titleMsg: messages.upload,
      onClick: () => this.handleUpload(),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["UploadIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 17
      }
    })] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "download",
      titleMsg: messages.download,
      onClick: () => this.handleDownload(),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["DownloadIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 17
      }
    })])]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FileMenu);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjJlZGNhNTAxYzdjMDU3ODJmOTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL0ZpbGVUcmVlL0ZpbGVNZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5cbmltcG9ydCB7XG4gIEZvbGRlckljb24sXG4gIExhbmd1YWdlQmxvY2tseUljb24sXG4gIExhbmd1YWdlSmF2YXNjcmlwdEljb24sXG4gIE1hcmtkb3duRmlsZUljb24sXG4gIE1ldGFkYXRhUGx1Z2luc0ljb24sXG4gIE1ldGFkYXRhQXNzZXRzSWNvbixcbiAgTWV0YWRhdGFMYXlvdXRJY29uLFxuICBNZXRhZGF0YVNpbXVsYXRvckljb24sXG4gIE1ldGFkYXRhVG9vbGJveEljb24sXG4gIFJlbmFtZUljb24sXG4gIERlbGV0ZUljb24sXG4gIERvd25sb2FkSWNvbixcbiAgVXBsb2FkSWNvbixcbiAgXG59IGZyb20gJy4uLy4uL21pc2MvcGFsZXR0ZSc7XG5cbmltcG9ydCB0eXBlIHsgRmlsZURlc2MsIE1ldGFkYXRhRGVzYywgRmlsZVJlZmVyZW5jZSwgRGlyUmVmZXJlbmNlLCBGaWxlQWN0aW9uIH0gZnJvbSAnLic7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICBjcmVhdGVGb2xkZXI6IHtcbiAgICBpZDogJ2FwcC5pZGUuZmlsZV9tZW51LmNyZWF0ZV9mb2xkZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVudSBpdGVtIHRleHQgZm9yIGNyZWF0aW5nIGEgZm9sZGVyJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ05ldyBGb2xkZXInLFxuICB9LFxuICBjcmVhdGVKYXZhc2NyaXB0RmlsZToge1xuICAgIGlkOiAnYXBwLmlkZS5maWxlX21lbnUuY3JlYXRlX2pzX2ZpbGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVudSBpdGVtIHRleHQgZm9yIGNyZWF0aW5nIGEgSmF2YXNjcmlwdCBmaWxlJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ05ldyBKYXZhc2NyaXB0IEZpbGUnLFxuICB9LFxuICBjcmVhdGVCbG9ja2x5RmlsZToge1xuICAgIGlkOiAnYXBwLmlkZS5maWxlX21lbnUuY3JlYXRlX2Jsb2NrbHlfZmlsZScsXG4gICAgZGVzY3JpcHRpb246ICdNZW51IGl0ZW0gdGV4dCBmb3IgY3JlYXRpbmcgYSBCbG9ja2x5IGZpbGUnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnTmV3IEJsb2NrbHkgRmlsZScsXG4gIH0sXG4gIGNyZWF0ZU1hcmtkb3duRmlsZToge1xuICAgIGlkOiAnYXBwLmlkZS5maWxlX21lbnUuY3JlYXRlX21hcmtkb3duX2ZpbGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVudSBpdGVtIHRleHQgZm9yIGNyZWF0aW5nIGEgTWFya2Rvd24gZmlsZScsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdOZXcgTWFya2Rvd24gRmlsZScsXG4gIH0sXG4gIGNyZWF0ZVBsdWdpbnNEaXJlY3Rvcnk6IHtcbiAgICBpZDogJ2FwcC5pZGUuZmlsZV9tZW51LmNyZWF0ZV9wbHVnaW5zX2RpcmVjdG9yeScsXG4gICAgZGVzY3JpcHRpb246ICdNZW51IGl0ZW0gdGV4dCBmb3IgY3JlYXRpbmcgdGhlIHBsdWdpbiBmb2xkZXInLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ3JlYXRlIFBsdWdpbiBGb2xkZXInLFxuICB9LFxuICBjcmVhdGVBc3NldHNEaXJlY3Rvcnk6IHtcbiAgICBpZDogJ2FwcC5pZGUuZmlsZV9tZW51LmNyZWF0ZV9hc3NldHNfZGlyZWN0b3J5JyxcbiAgICBkZXNjcmlwdGlvbjogJ01lbnUgaXRlbSB0ZXh0IGZvciBjcmVhdGluZyB0aGUgYXNzZXRzIGZvbGRlcicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgQXNzZXRzIEZvbGRlcicsXG4gIH0sXG4gIGNyZWF0ZVNpbXVsYXRvckNvbmZpZ3VyYXRpb246IHtcbiAgICBpZDogJ2FwcC5pZGUuZmlsZV9tZW51LmNyZWF0ZV9zaW11bGF0b3JfY29uZmlndXJhdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdNZW51IGl0ZW0gdGV4dCBmb3IgY3JlYXRpbmcgYSBzaW11bGF0b3IgY29uZmlndXJhdGlvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgU2ltdWxhdG9yIENvbmZpZ3VyYXRpb24nLFxuICB9LFxuICBjcmVhdGVMYXlvdXRDb25maWd1cmF0aW9uOiB7XG4gICAgaWQ6ICdhcHAuaWRlLmZpbGVfbWVudS5jcmVhdGVfbGF5b3V0X2NvbmZpZ3VyYXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVudSBpdGVtIHRleHQgZm9yIGNyZWF0aW5nIGEgd29ya3NwYWNlIGxheW91dCBjb25maWd1cmF0aW9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NyZWF0ZS9VcGRhdGUgV29ya3NwYWNlIExheW91dCBDb25maWd1cmF0aW9uJyxcbiAgfSxcbiAgY3JlYXRlVG9vbGJveENvbmZpZ3VyYXRpb246IHtcbiAgICBpZDogJ2FwcC5pZGUuZmlsZV9tZW51LmNyZWF0ZV90b29sYm94X2NvbmZpZ3VyYXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVudSBpdGVtIHRleHQgZm9yIGNyZWF0aW5nIGEgQmxvY2tseSB0b29sYm94IGNvbmZpZ3VyYXRpb24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ3JlYXRlIFRvb2xib3ggQ29uZmlndXJhdGlvbicsXG4gIH0sXG4gIGNyZWF0ZTNEU2ltdWxhdGlvbkNvbmZpZzp7XG4gICAgaWQ6ICdhcHAuaWRlLmZpbGVfbWVudS5jcmVhdGVfM0RTaW11bGF0aW9uX2NvbmZpZycsXG4gICAgZGVzY3JpcHRpb246ICdNZW51IEl0ZW0gdG8gY3JlYXRlIGEgM0QgU2ltdWxhdGlvbiBDb25maWcgRmlsZScsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgM0QgU2ltdWxhdGlvbiBDb25maWcnLFxuICB9LFxuXG4gIFxuICByZW5hbWU6IHtcbiAgICBpZDogJ2FwcC5pZGUuZmlsZV9tZW51LnJlbmFtZScsXG4gICAgZGVzY3JpcHRpb246ICdNZW51IGl0ZW0gdGV4dCBmb3IgcmVuYW1pbmcgYSBmaWxlJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1JlbmFtZScsXG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIGlkOiAnYXBwLmlkZS5maWxlX21lbnUuZGVsZXRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ01lbnUgaXRlbSB0ZXh0IGZvciBkZWxldGluZyBhIGZpbGUnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnRGVsZXRlJyxcbiAgfSxcbiAgdXBsb2FkOiB7XG4gICAgaWQ6ICdhcHAuaWRlLmZpbGVfbWVudS51cGxvYWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVudSBpdGVtIHRleHQgZm9yIGNyZWF0aW5nIGEgZmlsZSB2aWEgdXBsb2FkJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1VwbG9hZCcsXG4gIH0sXG4gIGRvd25sb2FkOiB7XG4gICAgaWQ6ICdhcHAuaWRlLmZpbGVfbWVudS5kb3dubG9hZCcsXG4gICAgZGVzY3JpcHRpb246ICdNZW51IGl0ZW0gdGV4dCBmb3IgZG93bmxvYWRpbmcgYSBmaWxlIGZyb20gdGhlIElERScsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdEb3dubG9hZCcsXG4gIH0sXG59KTtcblxudHlwZSBGaWxlTWVudUl0ZW1Qcm9wcyA9IHt8XG4gIHRpdGxlTXNnOiBPYmplY3QsXG4gIGljb246IHR5cGVvZiBSZWFjdC5Db21wb25lbnQsXG4gIC4uLlJlYWN0LkVsZW1lbnRDb25maWc8dHlwZW9mIE1lbnVJdGVtPixcbnx9O1xuXG5jb25zdCBGaWxlTWVudUl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPEZpbGVNZW51SXRlbVByb3BzLCBNZW51SXRlbT4oXG4gICh7IHRpdGxlTXNnLCBpY29uOiBUaGVJY29uLCAuLi5wcm9wcyB9OiBGaWxlTWVudUl0ZW1Qcm9wcywgcmVmOiBSZWY8TWVudUl0ZW0+KSA9PiAoXG4gICAgPE1lbnVJdGVtIHJlZj17cmVmfSB7Li4ucHJvcHN9PlxuICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgPFRoZUljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDxNIHsuLi50aXRsZU1zZ30gLz5cbiAgICA8L01lbnVJdGVtPlxuICApLFxuKTtcblxudHlwZSBQb3NpdGlvbiA9IHt8XG4gIGxlZnQ6IG51bWJlcixcbiAgdG9wOiBudW1iZXIsXG58fTtcblxudHlwZSBQcm9wVHlwZXMgPSB7fFxuICBvbkZpbGVBY3Rpb246IChhY3Rpb246IEZpbGVBY3Rpb24pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+LFxufH07XG50eXBlIFN0YXRlVHlwZXMgPSB7fFxuICB2aXNpYmxlOiBib29sZWFuLFxuICBjb25maWc6IHt8XG4gICAgYW5jaG9yUG9zaXRpb246IFBvc2l0aW9uLFxuICAgIGZpbGU6IEZpbGVSZWZlcmVuY2UsXG4gIHx9IHwgbnVsbCxcbnx9O1xuXG5jbGFzcyBGaWxlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wVHlwZXMsIFN0YXRlVHlwZXM+IHtcbiAgc3RhdGU6IFN0YXRlVHlwZXMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgY29uZmlnOiBudWxsLFxuICB9O1xuXG4gIHNob3coYW5jaG9yUG9zaXRpb246IFBvc2l0aW9uLCBmaWxlOiBGaWxlUmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IHRydWUsIGNvbmZpZzogeyBhbmNob3JQb3NpdGlvbiwgZmlsZSB9IH0pO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gIH1cblxuICBhY3Rpb24obWtBY3Rpb246IChmaWxlOiBGaWxlUmVmZXJlbmNlKSA9PiBGaWxlQWN0aW9uKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSkgdGhyb3cgJ21lbnUgaXMgbm90IHNob3duJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICh0aGlzLnN0YXRlLmNvbmZpZyA9PT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IHtcbiAgICAgIGNvbmZpZzogeyBmaWxlIH0sXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWN0aW9uID0gbWtBY3Rpb24oZmlsZSk7XG5cbiAgICB0aGlzLmhpZGUoKTtcbiAgICB0aGlzLnByb3BzLm9uRmlsZUFjdGlvbihhY3Rpb24pO1xuICB9XG5cbiAgaGFuZGxlQ3JlYXRlKGRlc2M6IEZpbGVEZXNjIHwgTWV0YWRhdGFEZXNjKSB7XG4gICAgdGhpcy5hY3Rpb24oKGZpbGUpID0+IHtcbiAgICAgIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgICAgIGNvbnN0IHBhcmVudERpcjogRGlyUmVmZXJlbmNlID0gZmlsZTtcblxuICAgICAgcmV0dXJuIHsgYWN0aW9uOiAnQ1JFQVRFJywgcGFyZW50RGlyLCBkZXNjIH07XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZW5hbWUoKSB7XG4gICAgdGhpcy5hY3Rpb24oKGZpbGUpID0+ICh7IGFjdGlvbjogJ1JFTkFNRScsIGZpbGUgfSkpO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlKCkge1xuICAgIHRoaXMuYWN0aW9uKChmaWxlKSA9PiAoeyBhY3Rpb246ICdERUxFVEUnLCBmaWxlIH0pKTtcbiAgfVxuXG4gIGhhbmRsZURvd25sb2FkKCkge1xuICAgIHRoaXMuYWN0aW9uKChmaWxlKSA9PiAoeyBhY3Rpb246ICdET1dOTE9BRCcsIGZpbGUgfSkpO1xuICB9XG5cbiAgaGFuZGxlVXBsb2FkKCkge1xuICAgIHRoaXMuYWN0aW9uKChmaWxlKSA9PiB7XG4gICAgICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gICAgICBjb25zdCBwYXJlbnREaXI6IERpclJlZmVyZW5jZSA9IGZpbGU7XG5cbiAgICAgIHJldHVybiB7IGFjdGlvbjogJ1VQTE9BRCcsIHBhcmVudERpciB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHRoaXMgd2lsbCBvbmx5IHRyaWdnZXIgYmVmb3JlIHRoZSBmaXJzdCBzaG93aW5nLlxuICAgIC8vIGFmdGVyIHRoYXQsIHRoZSBvbGQgY29uZmlnIGlzIHN0aWxsIHByZXNlbnQgYW5kIHdpbGwgZW5zdXJlIHRoYXRcbiAgICAvLyBmYWRlIG91dCBhbmltYXRpb25zIHdvbid0IGdsaXRjaCBkdWUgdG8gY2hhbmdpbmcgY29udGVudHMuXG4gICAgaWYgKHRoaXMuc3RhdGUuY29uZmlnID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpc2libGUsXG4gICAgICBjb25maWc6IHsgYW5jaG9yUG9zaXRpb24sIGZpbGUgfSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGlzUm9vdCA9IGZpbGUucGF0aCA9PT0gJy4nO1xuICAgIGNvbnN0IGlzTGVhZiA9ICFmaWxlLmZpbGUuaXNEaXJlY3RvcnkoKTtcbiAgICBjb25zdCBpc01ldGFkYXRhID0gZmlsZS5wYXRoID09PSAnLi8ubWV0YWRhdGEnICYmICFpc0xlYWY7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVcbiAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgYW5jaG9yUmVmZXJlbmNlPVwiYW5jaG9yUG9zaXRpb25cIlxuICAgICAgICBhbmNob3JQb3NpdGlvbj17YW5jaG9yUG9zaXRpb259XG4gICAgICAgIG9wZW49e3Zpc2libGV9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHRoaXMuaGlkZSgpfVxuICAgICAgPlxuICAgICAgICB7W1xuICAgICAgICAgIC4uLighaXNMZWFmXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9XCJjcmVhdGVfZGlyZWN0b3J5XCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlTXNnPXttZXNzYWdlcy5jcmVhdGVGb2xkZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNyZWF0ZSh7IHR5cGU6ICdESVJFQ1RPUlknIH0pfVxuICAgICAgICAgICAgICAgICAgaWNvbj17Rm9sZGVySWNvbn1cbiAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAuLi4oaXNNZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgPEZpbGVNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY3JlYXRlX3BsdWdpbnNfZGlyZWN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTXNnPXttZXNzYWdlcy5jcmVhdGVQbHVnaW5zRGlyZWN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdNRVRBREFUQScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BsdWdpbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVUeXBlOiAnRElSRUNUT1JZJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e01ldGFkYXRhUGx1Z2luc0ljb259XG4gICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgPEZpbGVNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY3JlYXRlX2Fzc2V0c19kaXJlY3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVNc2c9e21lc3NhZ2VzLmNyZWF0ZUFzc2V0c0RpcmVjdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnTUVUQURBVEEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhc3NldHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVUeXBlOiAnRElSRUNUT1JZJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e01ldGFkYXRhQXNzZXRzSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjcmVhdGVfM0RTaW11bGF0aW9uX2NvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU1zZz17bWVzc2FnZXMuY3JlYXRlM0RTaW11bGF0aW9uQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdNRVRBREFUQScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJzNEU2ltdWxhdGlvbkNvbmZpZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVR5cGU6ICdGaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e01ldGFkYXRhTGF5b3V0SWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjcmVhdGVfbGF5b3V0X2NvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU1zZz17bWVzc2FnZXMuY3JlYXRlTGF5b3V0Q29uZmlndXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnTUVUQURBVEEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsYXlvdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVUeXBlOiAnRklMRScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtNZXRhZGF0YUxheW91dEljb259XG4gICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgPEZpbGVNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY3JlYXRlX3NpbXVsYXRvcl9jb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVNc2c9e21lc3NhZ2VzLmNyZWF0ZVNpbXVsYXRvckNvbmZpZ3VyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ01FVEFEQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2ltdWxhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlVHlwZTogJ0ZJTEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17TWV0YWRhdGFTaW11bGF0b3JJY29ufVxuICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICAgIDxGaWxlTWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNyZWF0ZV90b29sYm94X2NvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU1zZz17bWVzc2FnZXMuY3JlYXRlVG9vbGJveENvbmZpZ3VyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ01FVEFEQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndG9vbGJveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVR5cGU6ICdGSUxFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e01ldGFkYXRhVG9vbGJveEljb259XG4gICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgIDxGaWxlTWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNyZWF0ZV9qc19maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTXNnPXttZXNzYWdlcy5jcmVhdGVKYXZhc2NyaXB0RmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ3JlYXRlKHsgdHlwZTogJ0ZJTEUnLCBleHRlbnNpb246ICcuanMnIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17TGFuZ3VhZ2VKYXZhc2NyaXB0SWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjcmVhdGVfYmxvY2tseV9maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTXNnPXttZXNzYWdlcy5jcmVhdGVCbG9ja2x5RmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRklMRScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiAnLmJsb2NrbHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17TGFuZ3VhZ2VCbG9ja2x5SWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjcmVhdGVfbWRfZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZU1zZz17bWVzc2FnZXMuY3JlYXRlTWFya2Rvd25GaWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDcmVhdGUoeyB0eXBlOiAnRklMRScsIGV4dGVuc2lvbjogJy5tZCcgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtNYXJrZG93bkZpbGVJY29ufVxuICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBrZXk9XCJkaXZpZGVyLWRpcmVjdG9yeVwiIC8+LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFtdKSxcbiAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICBrZXk9XCJyZW5hbWVcIlxuICAgICAgICAgICAgdGl0bGVNc2c9e21lc3NhZ2VzLnJlbmFtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVuYW1lKCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNSb290fVxuICAgICAgICAgICAgaWNvbj17UmVuYW1lSWNvbn1cbiAgICAgICAgICAvPixcbiAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICBrZXk9XCJkZWxldGVcIlxuICAgICAgICAgICAgdGl0bGVNc2c9e21lc3NhZ2VzLmRlbGV0ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlKCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNSb290fVxuICAgICAgICAgICAgaWNvbj17RGVsZXRlSWNvbn1cbiAgICAgICAgICAvPixcbiAgICAgICAgICA8RGl2aWRlciBrZXk9XCJkaXZpZGVyLXVwbG9hZC1kb3dubG9hZFwiIC8+LFxuICAgICAgICAgIC4uLighaXNMZWFmXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9XCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgdGl0bGVNc2c9e21lc3NhZ2VzLnVwbG9hZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVXBsb2FkKCl9XG4gICAgICAgICAgICAgICAgICBpY29uPXtVcGxvYWRJY29ufVxuICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICA8RmlsZU1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9XCJkb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICB0aXRsZU1zZz17bWVzc2FnZXMuZG93bmxvYWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURvd25sb2FkKCl9XG4gICAgICAgICAgICAgICAgICBpY29uPXtEb3dubG9hZEljb259XG4gICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICBdfVxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZU1lbnU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW1CQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFwRUE7QUFpRkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUF0T0E7QUFDQTtBQXVPQTs7OztBIiwic291cmNlUm9vdCI6IiJ9