require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/projects/ProjectList/ProjectList.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.ProjectList-container-EbP0l {\n  margin: 0 auto;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.ProjectList-root-3QuyZ {\n  margin: 40px 0;\n  padding: 16px 8px;\n}\n\n.ProjectList-toolbar-3l19l {\n  padding-right: 16px;\n}\n\n.ProjectList-title-6g3K3 {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/ProjectList.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,oCAAoC;CACrC;;AAED;EACE,eAAe;EACf,kBAAkB;CACnB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,qBAAqB;MACjB,aAAa;CAClB","file":"ProjectList.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.root {\n  margin: 40px 0;\n  padding: 16px 8px;\n}\n\n.toolbar {\n  padding-right: 16px;\n}\n\n.title {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "ProjectList-container-EbP0l",
	"root": "ProjectList-root-3QuyZ",
	"toolbar": "ProjectList-toolbar-3l19l",
	"title": "ProjectList-title-6g3K3"
};

/***/ }),

/***/ "./src/components/misc/SimpleDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _commonMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/misc/commonMessages.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/misc/SimpleDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











/**
 * A wrapper for the material-ui `Dialog` component for easy display of dialogs
 * with title, main content, and actions.
 * The component takes care of basic ARIA attributes for title and description,
 * and dispatches close and submit events to the calling code.
 *
 * One of the `ActionConstant`s can be used to display OK/Cancel buttons,
 * or a custom list/fragment of buttons can be passed.
 */
function SimpleDialog({
  id,
  open,
  valid,
  title,
  description,
  actions,
  onCancel,
  onConfirm,
  children
}) {
  const conditionalProps = {};
  if (title !== undefined) conditionalProps['aria-labelledby'] = `${id}-title`;
  if (description !== undefined) conditionalProps['aria-describedby'] = `${id}-description`;
  let actionsNode;

  switch (actions) {
    case 'OK_CANCEL':
    case 'OK_autofocus_CANCEL':
    case 'OK_CANCEL_autofocus':
      actionsNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: onCancel,
        color: "secondary",
        autoFocus: actions === 'OK_CANCEL_autofocus',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _commonMessages__WEBPACK_IMPORTED_MODULE_8__["default"].cancel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "submit",
        color: "primary",
        disabled: !valid,
        autoFocus: actions === 'OK_autofocus_CANCEL',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _commonMessages__WEBPACK_IMPORTED_MODULE_8__["default"].ok, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }))));
      break;

    default:
      actionsNode = actions;
  }

  const handleSubmit = event => {
    if (onConfirm !== undefined) onConfirm();
    event.preventDefault();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    open: open,
    onClose: onCancel
  }, conditionalProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, title !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: `${id}-title`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 32
    }
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, description !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: `${id}-description`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, description) : null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, actionsNode)));
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleDialog);

/***/ }),

/***/ "./src/components/projects/ProjectList/ProjectList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var material_ui_popup_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("material-ui-popup-state");
/* harmony import */ var material_ui_popup_state__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/components/misc/Link.js");
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/core/store/projects.js");
/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/components/projects/ProjectList/ProjectList.scss");
/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_ProjectList_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _useShareProjectDialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/components/projects/ProjectList/useShareProjectDialog.js");
/* harmony import */ var _useCreateProjectDialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/components/projects/ProjectList/useCreateProjectDialog.js");
/* harmony import */ var _useDeleteProjectDialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/components/projects/ProjectList/useDeleteProjectDialog.js");
/* harmony import */ var _useRenameProjectDialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/components/projects/ProjectList/useRenameProjectDialog.js");
/* harmony import */ var _useCreateRemoteProjectDialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/components/projects/ProjectList/useCreateRemoteProjectDialog.js");
/* harmony import */ var _useDeleteRemoteProjectDialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/components/projects/ProjectList/useDeleteRemoteProjectDialog.js");
/* harmony import */ var _useCloneRemoteProjectDialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/components/projects/ProjectList/useCloneRemoteProjectDialog.js");
/* harmony import */ var _useProjectIndex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/components/projects/ProjectList/useProjectIndex.js");
/* harmony import */ var _useCreateRemoteProject__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/components/projects/ProjectList/useCreateRemoteProject.js");
/* harmony import */ var _useDeleteRemoteProject__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./src/components/projects/ProjectList/useDeleteRemoteProject.js");
/* harmony import */ var _useProjectContentQuery__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./src/components/projects/ProjectList/useProjectContentQuery.js");
/* harmony import */ var _users_AuthProvider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./src/components/users/AuthProvider.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/ProjectList.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



































const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
  projectsTitle: {
    "id": "app.projects.list_title",
    "defaultMessage": "Your Projects"
  },
  createProjectTooltip: {
    "id": "app.projects.create_project_tooltip",
    "defaultMessage": "Create Project"
  },
  refreshProjectListTooltip: {
    "id": "app.projects.refresh_project_list_tooltip",
    "defaultMessage": "Refresh Project List"
  },
  shareProjectTooltip: {
    "id": "app.projects.share_project_tooltip",
    "defaultMessage": "Share Project \"{name}\""
  },
  renameProjectTooltip: {
    "id": "app.projects.rename_project_tooltip",
    "defaultMessage": "Rename Project \"{name}\""
  },
  deleteProjectTooltip: {
    "id": "app.projects.delete_project_tooltip",
    "defaultMessage": "Delete Project \"{name}\""
  },
  exercisesTitle: {
    "id": "app.exercises.list_title",
    "defaultMessage": "Remote Projekts"
  },
  refreshExerciseListTooltip: {
    "id": "app.exercises.refresh_exercise_list_tooltip",
    "defaultMessage": "Refresh Exercise List"
  },
  exerciseSecondaryText: {
    "id": "app.exercises.secondary_text",
    "defaultMessage": "Difficulty: {level}"
  },
  uploadExerciseTooltip: {
    "id": "app.exercises.upload_exercise_tooltip",
    "defaultMessage": "Upload project \"{name}\" as an exercise"
  },
  cloneExerciseTooltip: {
    "id": "app.exercises.clone_exercise_tooltip",
    "defaultMessage": "Create new project to work on exercise \"{name}\""
  },
  openAssociatedProjectTooltip: {
    "id": "app.exercises.open_associated_project_tooltip",
    "defaultMessage": "Open project \"{name}\" to work on exercise \"{exercise}\""
  },
  openAssociatedProjectMenuTooltip: {
    "id": "app.exercises.open_associated_project_menu_tooltip",
    "defaultMessage": "Open an existing project to work on exercise \"{exercise}\""
  },
  openAssociatedProjectMenuItem: {
    "id": "app.exercises.open_associated_project_menu_item",
    "defaultMessage": "Open project \"{name}\""
  },
  editExerciseTooltip: {
    "id": "app.exercises.edit_exercise_tooltip",
    "defaultMessage": "Edit Exercise \"{name}\""
  },
  deleteExerciseTooltip: {
    "id": "app.exercises.delete_exercise_tooltip",
    "defaultMessage": "Delete Exercise \"{name}\""
  }
});

/**
 * The ProjectList component has two purposes:
 * show a list of local projects (stored in the "filer" browser file system),
 * and show a list of remote projects (accessed via GraphQL).
 * The component allows managing local projects and, for logged in users, remote projects as well.
 */
function ProjectList(_props) {
  const auth = Object(_users_AuthProvider__WEBPACK_IMPORTED_MODULE_33__["useAuth"])();
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  const createProjectMutation = Object(_useCreateRemoteProject__WEBPACK_IMPORTED_MODULE_30__["default"])();
  const deleteProjectMutation = Object(_useDeleteRemoteProject__WEBPACK_IMPORTED_MODULE_31__["default"])();
  const loadProjectContent = Object(_useProjectContentQuery__WEBPACK_IMPORTED_MODULE_32__["default"])();
  const [{
    localProjects,
    remoteProjects,
    localToRemoteMap,
    remoteToLocalMap
  }, projectIndexDispatch] = Object(_useProjectIndex__WEBPACK_IMPORTED_MODULE_29__["default"])();

  async function confirmCreateProject(name) {
    try {
      await _core_store_projects__WEBPACK_IMPORTED_MODULE_20__["Project"].createProject(name);
      projectIndexDispatch({
        type: 'REFRESH_LOCAL'
      });
      return true;
    } catch (ex) {
      if (!(ex instanceof _core_store_projects__WEBPACK_IMPORTED_MODULE_20__["ProjectError"])) throw ex;
      projectIndexDispatch({
        type: 'REFRESH_LOCAL'
      });
      return false;
    }
  }

  const createProject = Object(_useCreateProjectDialog__WEBPACK_IMPORTED_MODULE_23__["default"])(confirmCreateProject, localProjects);

  async function confirmDeleteProject(project) {
    try {
      await project.delete();
      projectIndexDispatch({
        type: 'REMOVE_MAPPING',
        projectUid: project.uid
      });
      projectIndexDispatch({
        type: 'REFRESH_LOCAL'
      });
      return true;
    } catch (ex) {
      if (!(ex instanceof _core_store_projects__WEBPACK_IMPORTED_MODULE_20__["ProjectError"])) throw ex;
      projectIndexDispatch({
        type: 'REFRESH_LOCAL'
      });
      return false;
    }
  }

  const deleteProject = Object(_useDeleteProjectDialog__WEBPACK_IMPORTED_MODULE_24__["default"])(confirmDeleteProject);

  async function confirmRenameProject(project, newName) {
    try {
      await project.rename(newName);
      projectIndexDispatch({
        type: 'REFRESH_LOCAL'
      });
      return true;
    } catch (ex) {
      if (!(ex instanceof _core_store_projects__WEBPACK_IMPORTED_MODULE_20__["ProjectError"])) throw ex;
      projectIndexDispatch({
        type: 'REFRESH_LOCAL'
      });
      return false;
    }
  }

  const shareProject = Object(_useShareProjectDialog__WEBPACK_IMPORTED_MODULE_22__["default"])(confirmShareProject, localProjects);

  async function confirmShareProject(localProject) {
    const id = await createProjectMuation(localProject);
    projectIndexDispatch({
      type: 'Add_MAPPING',
      projectUid: localProject.uid,
      remoteId: id
    });
    projectIndexDispatch({
      type: 'REFRESH_REMOTE'
    });
    return true;
  }

  const renameProject = Object(_useRenameProjectDialog__WEBPACK_IMPORTED_MODULE_25__["default"])(confirmRenameProject, localProjects);

  async function confirmCreateRemoteProject(localProject) {
    const id = await createProjectMutation(localProject);
    projectIndexDispatch({
      type: 'ADD_MAPPING',
      projectUid: localProject.uid,
      remoteId: id
    });
    projectIndexDispatch({
      type: 'REFRESH_REMOTE'
    });
    return true;
  }

  const createRemoteProject = Object(_useCreateRemoteProjectDialog__WEBPACK_IMPORTED_MODULE_26__["default"])(confirmCreateRemoteProject);

  async function confirmDeleteRemoteProject(project) {
    await deleteProjectMutation(project.id);
    projectIndexDispatch({
      type: 'REFRESH_REMOTE'
    });
    return true;
  }

  const deleteRemoteProject = Object(_useDeleteRemoteProjectDialog__WEBPACK_IMPORTED_MODULE_27__["default"])(confirmDeleteRemoteProject);

  async function confirmCloneRemoteProject(project, name) {
    let content;

    try {
      content = await loadProjectContent(project.id);
    } catch (_ex) {
      projectIndexDispatch({
        type: 'REFRESH_REMOTE'
      });
      return true;
    }

    try {
      const localProject = await _core_store_projects__WEBPACK_IMPORTED_MODULE_20__["Project"].createProject(name);
      await Object(_useProjectContentQuery__WEBPACK_IMPORTED_MODULE_32__["populateProject"])(localProject, content);
      projectIndexDispatch({
        type: 'REFRESH_LOCAL'
      });
      projectIndexDispatch({
        type: 'ADD_MAPPING',
        projectUid: localProject.uid,
        remoteId: project.id
      });
      return true;
    } catch (ex) {
      if (!(ex instanceof _core_store_projects__WEBPACK_IMPORTED_MODULE_20__["ProjectError"])) throw ex;
      projectIndexDispatch({
        type: 'REFRESH_LOCAL'
      });
      return false;
    }
  }

  const cloneRemoteProject = Object(_useCloneRemoteProjectDialog__WEBPACK_IMPORTED_MODULE_28__["default"])(confirmCloneRemoteProject, localProjects);
  const isLoggedIn = !!auth.authData;
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default.a.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default.a.title,
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.projectsTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
    title: intl.formatMessage(messages.createProjectTooltip),
    placement: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": intl.formatMessage(messages.createProjectTooltip),
    onClick: createProject.show,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["CreateIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
    title: intl.formatMessage(messages.refreshProjectListTooltip),
    placement: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "end",
    "aria-label": intl.formatMessage(messages.refreshProjectListTooltip),
    onClick: () => projectIndexDispatch({
      type: 'REFRESH_LOCAL'
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["RefreshIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 9
    }
  }, localProjects.map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: project.name,
    button: true,
    component: _misc_Link__WEBPACK_IMPORTED_MODULE_18__["default"],
    to: `/projects/${project.name}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["LocalProjectIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 19
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
    primary: project.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 15
    }
  }, isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
    title: intl.formatMessage(messages.uploadExerciseTooltip, {
      name: project.name
    }),
    placement: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": intl.formatMessage(messages.uploadExerciseTooltip, {
      name: project.name
    }),
    disabled: project.uid in localToRemoteMap,
    onClick: () => createRemoteProject.show(project),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["UploadExerciseIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 23
    }
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
    title: intl.formatMessage(messages.renameProjectTooltip, {
      name: project.name
    }),
    placement: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": intl.formatMessage(messages.renameProjectTooltip, {
      name: project.name
    }),
    onClick: () => renameProject.show(project),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["RenameIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
    title: intl.formatMessage(messages.deleteProjectTooltip, {
      name: project.name
    }),
    placement: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "end",
    "aria-label": intl.formatMessage(messages.deleteProjectTooltip, {
      name: project.name
    }),
    onClick: () => deleteProject.show(project),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["DeleteIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 21
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
    id: "create-dialog"
  }, createProject.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
    id: "share-dialog"
  }, shareProject.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
    id: "delete-dialog"
  }, deleteProject.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
    id: "rename-dialog"
  }, renameProject.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
    id: "create-remote-dialog"
  }, createRemoteProject.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 9
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default.a.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: _ProjectList_scss__WEBPACK_IMPORTED_MODULE_21___default.a.title,
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.exercisesTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
    title: intl.formatMessage(messages.refreshExerciseListTooltip),
    placement: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "end",
    "aria-label": intl.formatMessage(messages.refreshExerciseListTooltip),
    onClick: () => projectIndexDispatch({
      type: 'REFRESH_REMOTE'
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["RefreshIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 9
    }
  }, remoteProjects.map(exercise => {
    var _remoteToLocalMap$exe;

    const associatedProjects = (_remoteToLocalMap$exe = remoteToLocalMap[exercise.id]) !== null && _remoteToLocalMap$exe !== void 0 ? _remoteToLocalMap$exe : [];
    const hasOpenCommand = associatedProjects.length > 0;
    const hasOpenPopup = associatedProjects.length > 1;
    const hasAdminCommands = isLoggedIn;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: exercise.id,
      button: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["LocalProjectIcon"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
      primary: exercise.name // secondary={intl.formatMessage(
      //   messages.exerciseSecondaryText,
      //   {
      //     ...exercise,
      //   },
      // )}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
      title: intl.formatMessage(messages.cloneExerciseTooltip, {
        name: exercise.name
      }),
      placement: "bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, !hasOpenCommand ? {
      edge: 'end'
    } : {}, {
      "aria-label": intl.formatMessage(messages.cloneExerciseTooltip, {
        name: exercise.name
      }),
      onClick: () => cloneRemoteProject.show(exercise),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["CreateIcon"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 23
      }
    }))), !hasOpenCommand ? null : !hasOpenPopup ? associatedProjects.map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
      key: project.name,
      title: intl.formatMessage(messages.openAssociatedProjectTooltip, {
        exercise: exercise.name,
        name: project.name
      }),
      placement: "bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, !hasAdminCommands ? {
      edge: 'end'
    } : {}, {
      "aria-label": intl.formatMessage(messages.openAssociatedProjectTooltip, {
        exercise: exercise.name,
        name: project.name
      }),
      component: _misc_Link__WEBPACK_IMPORTED_MODULE_18__["default"],
      to: `/projects/${project.name}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["OpenIcon"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 27
      }
    })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](material_ui_popup_state__WEBPACK_IMPORTED_MODULE_16___default.a, {
      variant: "popover",
      popupId: `${exercise.name}-menu`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 21
      }
    }, popupState => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
      title: intl.formatMessage(messages.openAssociatedProjectMenuTooltip, {
        exercise: exercise.name
      }),
      placement: "bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 27
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, !hasAdminCommands ? {
      edge: 'end'
    } : {}, Object(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_16__["bindTrigger"])(popupState), {
      "aria-label": intl.formatMessage(messages.openAssociatedProjectMenuTooltip, {
        exercise: exercise.name
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["OpenIcon"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 31
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, _extends({
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'top'
      },
      transformOrigin: {
        horizontal: 'right',
        vertical: 'top'
      },
      keepMounted: true
    }, Object(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_16__["bindMenu"])(popupState), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 27
      }
    }), associatedProjects.map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
      key: project.name,
      component: _misc_Link__WEBPACK_IMPORTED_MODULE_18__["default"],
      to: `/projects/${project.name}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 31
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.openAssociatedProjectMenuItem, {
      values: {
        name: project.name
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 33
      }
    }))))))), !hasAdminCommands ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
      title: intl.formatMessage(messages.editExerciseTooltip, {
        name: exercise.name
      }),
      placement: "bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      "aria-label": intl.formatMessage(messages.editExerciseTooltip, {
        name: exercise.name
      }) // onClick={() => ...}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["RenameIcon"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 27
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_14___default.a, {
      title: intl.formatMessage(messages.deleteExerciseTooltip, {
        name: exercise.name
      }),
      placement: "bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      edge: "end",
      "aria-label": intl.formatMessage(messages.deleteExerciseTooltip, {
        name: exercise.name
      }),
      onClick: () => deleteRemoteProject.show(exercise),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_17__["DeleteIcon"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 27
      }
    }))))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
    id: "clone-remote-dialog"
  }, cloneRemoteProject.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
    id: "delete-remote-dialog"
  }, deleteRemoteProject.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 9
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectList);

/***/ }),

/***/ "./src/components/projects/ProjectList/ProjectList.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/projects/ProjectList/ProjectList.scss");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/projects/ProjectList/ProjectList.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/projects/ProjectList/ProjectList.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/projects/ProjectList/useCloneRemoteProjectDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCloneRemoteProjectDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/core/store/projects.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/useCloneRemoteProjectDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.exercises.clone_exercise_dialog.title",
    "defaultMessage": "Create new project"
  },
  description: {
    "id": "app.exercises.clone_exercise_dialog.description",
    "defaultMessage": "Please enter the project name for working on exercise \"{name}\"."
  },
  label: {
    "id": "app.exercises.clone_exercise_dialog.new_name_label",
    "defaultMessage": "Project Name"
  }
});
function useCloneRemoteProjectDialog(onCreate, allProjects) {
  var _config$project$name;

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const [newProjectName, setNewProjectName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');

  function show(project) {
    setOpen(true);
    setConfig({
      project
    });
    setNewProjectName('');
  }

  function onCancel() {
    setOpen(false);
  }

  function onChange(event) {
    const name = event.target.value;
    const nameClean = name.replace(/[^-\w#$%().,:; ]/g, '');
    setNewProjectName(nameClean);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      project
    } = config;
    const success = await onCreate(project, newProjectName);

    if (success) {
      setOpen(false);
    }
  }

  const valid = newProjectName !== '' && allProjects.every(project => project.name !== newProjectName);
  const name = (_config$project$name = config === null || config === void 0 ? void 0 : config.project.name) !== null && _config$project$name !== void 0 ? _config$project$name : '';
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          values: {
            name
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 22
          }
        })),
        actions: 'OK_CANCEL',
        onCancel,
        onConfirm,
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
          autoFocus: true,
          margin: "dense",
          id: "name",
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.label, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 20
            }
          })),
          type: "text",
          value: newProjectName,
          onChange: onChange,
          error: !valid,
          fullWidth: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }
        })
      };
    }

  };
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useCreateProjectDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCreateProjectDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/core/store/projects.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/useCreateProjectDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.projects.create_project_dialog.title",
    "defaultMessage": "Create new project"
  },
  description: {
    "id": "app.projects.create_project_dialog.description",
    "defaultMessage": "Please enter the new project's name."
  },
  label: {
    "id": "app.projects.create_project_dialog.new_name_label",
    "defaultMessage": "Project Name"
  }
});
function useCreateProjectDialog(onCreate, allProjects) {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [newProjectName, setNewProjectName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');

  function show() {
    setOpen(true);
    setNewProjectName('');
  }

  function onCancel() {
    setOpen(false);
  }

  function onChange(event) {
    const name = event.target.value;
    const nameClean = name.replace(/[^-\w#$%().,:; ]/g, '');
    setNewProjectName(nameClean);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown';
    const success = await onCreate(newProjectName);

    if (success) {
      setOpen(false);
    }
  }

  const valid = newProjectName !== '' && allProjects.every(project => project.name !== newProjectName);
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 22
          }
        })),
        actions: 'OK_CANCEL',
        onCancel,
        onConfirm,
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
          autoFocus: true,
          margin: "dense",
          id: "name",
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.label, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 20
            }
          })),
          type: "text",
          value: newProjectName,
          onChange: onChange,
          error: !valid,
          fullWidth: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }
        })
      };
    }

  };
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useCreateRemoteProject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCreateRemoteProject; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("filer");
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(filer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("base64-js");
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(base64_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/core/store/projects.js");





const useCreateProjectMutation = _misc_hooks__WEBPACK_IMPORTED_MODULE_3__["makeMutation"](graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation CreateProject($projectInput: ProjectInput!) {
    createProject(project: $projectInput)
  }
`);

async function projectToInput(project) {
  async function visitFile(file, path) {
    const {
      name
    } = file;
    const absolutePath = project.resolve(...path);
    const binaryData = await filer__WEBPACK_IMPORTED_MODULE_1__["fs"].promises.readFile(absolutePath);
    const data = base64_js__WEBPACK_IMPORTED_MODULE_2___default.a.fromByteArray(binaryData);
    return {
      name,
      data
    };
  }

  async function visitDirectory(directory, path) {
    const {
      name
    } = directory;
    const filePromises = [];
    const treePromises = [];

    for (const file of directory.contents) {
      const childPath = [...path, file.name];

      if (file.isDirectory()) {
        // $FlowExpectError
        treePromises.push(visitDirectory(file, childPath));
      } else {
        filePromises.push(visitFile(file, childPath));
      }
    }

    const [files, trees] = await Promise.all([Promise.all(filePromises), Promise.all(treePromises)]);
    return {
      name,
      tree: {
        files,
        trees
      }
    };
  } // $FlowExpectError


  const files = await project.getFiles(); // discard the name, it's not part of the FileTreeInput

  const {
    tree: fileTree
  } = await visitDirectory(files, []);
  return {
    name: project.name,
    isPublic: true,
    fileTree
  };
}

function useCreateRemoteProject() {
  const [performCreateProject, _createProjectResponse] = useCreateProjectMutation();

  async function createProject(project) {
    const projectInput = await projectToInput(project);
    const result = await performCreateProject({
      variables: {
        projectInput
      }
    }); // we're not passing `ignoreResults`, so there will be a result
    // eslint-disable-next-line no-throw-literal

    if (!result.data) throw 'unreachable';
    return result.data.createProject;
  }

  return createProject;
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useCreateRemoteProjectDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCreateRemoteProjectDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/store/projects.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/useCreateRemoteProjectDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.exercises.create_exercise_dialog.title",
    "defaultMessage": "Create new exercise"
  },
  description: {
    "id": "app.exercises.create_exercise_dialog.description",
    "defaultMessage": "Do you want to upload project \"{name}\" as an exercise?"
  }
});
function useCreateRemoteProjectDialog(onCreate) {
  var _config$localProject$;

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  function show(localProject) {
    setOpen(true);
    setConfig({
      localProject
    });
  }

  function onCancel() {
    setOpen(false);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      localProject
    } = config;
    const success = await onCreate(localProject);

    if (success) {
      setOpen(false);
    }
  }

  const name = (_config$localProject$ = config === null || config === void 0 ? void 0 : config.localProject.name) !== null && _config$localProject$ !== void 0 ? _config$localProject$ : '';
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid: true,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          values: {
            name
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 22
          }
        })),
        actions: 'OK_CANCEL',
        onCancel,
        onConfirm
      };
    }

  };
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useDeleteProjectDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDeleteProjectDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/store/projects.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/useDeleteProjectDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.projects.delete_project_dialog.title",
    "defaultMessage": "Confirm deletion"
  },
  description: {
    "id": "app.projects.delete_project_dialog.description",
    "defaultMessage": "Are you sure you want to delete project \"{name}\"?"
  }
});
function useDeleteProjectDialog(onDelete) {
  var _config$project$name;

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  function show(project) {
    setOpen(true);
    setConfig({
      project
    });
  }

  function onCancel() {
    setOpen(false);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      project
    } = config; // whether the deletion succeeded or not, we want to hide the dialog.
    // Thus, ignore the result of onDelete

    await onDelete(project); // we don't set the project to null because that results in a display glitch:
    // the hide animation will leave the project name visible for a split second

    setOpen(false);
  }

  const name = (_config$project$name = config === null || config === void 0 ? void 0 : config.project.name) !== null && _config$project$name !== void 0 ? _config$project$name : '';
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid: true,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          values: {
            name
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 22
          }
        })),
        actions: 'OK_autofocus_CANCEL',
        onCancel,
        onConfirm
      };
    }

  };
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useDeleteRemoteProject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDeleteRemoteProject; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/misc/hooks/index.js");


const useDeleteProjectMutation = _misc_hooks__WEBPACK_IMPORTED_MODULE_1__["makeMutation"](graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation DeleteProject($projectId: ID!) {
    deleteProjectById(projectId: $projectId)
  }
`);
function useDeleteRemoteProject() {
  const [performDeleteProject, _deleteProjectResponse] = useDeleteProjectMutation();

  async function deleteProject(projectId) {
    var _result$data$deletePr;

    const result = await performDeleteProject({
      variables: {
        projectId
      }
    }); // we're not passing `ignoreResults`, so there will be a result
    // eslint-disable-next-line no-throw-literal

    if (!result.data) throw 'unreachable';
    return (_result$data$deletePr = result.data.deleteProjectById) !== null && _result$data$deletePr !== void 0 ? _result$data$deletePr : null;
  }

  return deleteProject;
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useDeleteRemoteProjectDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDeleteRemoteProjectDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/useDeleteRemoteProjectDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.exercises.delete_exercise_dialog.title",
    "defaultMessage": "Confirm deletion"
  },
  description: {
    "id": "app.exercises.delete_exercise_dialog.description",
    "defaultMessage": "Are you sure you want to delete exercise \"{name}\"?"
  }
});
function useDeleteRemoteProjectDialog(onDelete) {
  var _config$project$name;

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  function show(project) {
    setOpen(true);
    setConfig({
      project
    });
  }

  function onCancel() {
    setOpen(false);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      project
    } = config; // whether the deletion succeeded or not, we want to hide the dialog.
    // Thus, ignore the result of onDelete

    await onDelete(project); // we don't set the project to null because that results in a display glitch:
    // the hide animation will leave the project name visible for a split second

    setOpen(false);
  }

  const name = (_config$project$name = config === null || config === void 0 ? void 0 : config.project.name) !== null && _config$project$name !== void 0 ? _config$project$name : '';
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid: true,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          values: {
            name
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 22
          }
        })),
        actions: 'OK_autofocus_CANCEL',
        onCancel,
        onConfirm
      };
    }

  };
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useProjectContentQuery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateProject", function() { return populateProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useProjectContentQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("base64-js");
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(base64_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("filer");
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/core/store/projects.js");






const useRemoteProjectContentQuery = _misc_hooks__WEBPACK_IMPORTED_MODULE_4__["makeLazyQuery"](graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query RemoteProjectContent($projectId: ID!) {
    projectById(id: $projectId) {
      id
      fileTreeRootId
      fileTrees {
        id
        contents {
          name
          type
          itemId
        }
      }
      files {
        id
        data
      }
    }
  }
`);
/**
 * Saves all remote project contents in the given local project.
 */

async function populateProject(project, contents) {
  // prettier-ignore
  // eslint-disable-next-line no-shadow
  const fileTrees = Object.fromEntries(contents.fileTrees.map(({
    id,
    contents
  }) => [id, contents]));
  const files = Object.fromEntries(contents.files.map(({
    id,
    data
  }) => [id, data]));

  async function visitChildren(fileTree, path) {
    return Promise.all(fileTree.map(async ({
      name,
      type,
      itemId
    }) => {
      const absolutePath = project.resolve(...path, name);

      switch (type) {
        case 'FILE':
          {
            const data = filer__WEBPACK_IMPORTED_MODULE_2___default.a.Buffer.from(base64_js__WEBPACK_IMPORTED_MODULE_1___default.a.toByteArray(files[itemId]));
            await filer__WEBPACK_IMPORTED_MODULE_2__["fs"].promises.writeFile(absolutePath, data);
            break;
          }

        case 'TREE':
          {
            await filer__WEBPACK_IMPORTED_MODULE_2__["fs"].promises.mkdir(absolutePath);
            await visitChildren(fileTrees[itemId], [...path, name]);
            break;
          }

        default:
          // eslint-disable-next-line no-throw-literal
          throw 'unreachable';
      }
    }));
  }

  await visitChildren(fileTrees[contents.fileTreeRootId], []);
}
/**
 * Query to get the contents of a given remote project identified by its projectId.
 */

function useProjectContentQuery() {
  // this construction is to get a result out of useLazyQuery as a promise:
  // we assume there are no concurrent requests
  // At some point, there will be data for the latest request. When this happens, we have already
  // saved a resolve callback, so in an effect, we invoke that callback with the latest result.
  const [executeQuery, projectContentResponse] = useRemoteProjectContentQuery();
  const resolveRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const {
      variables,
      data,
      error
    } = projectContentResponse;
    if (!data && !error) return; // we assume there are no concurrent requests
    // eslint-disable-next-line no-throw-literal

    if (resolveRef.current === null) throw 'unreachable';
    const {
      projectId,
      resolve,
      reject
    } = resolveRef.current;
    resolveRef.current = null; // we assume there are no concurrent requests
    // eslint-disable-next-line no-throw-literal

    if (variables.projectId !== projectId) throw 'unreachable';
    if (data) resolve(data.projectById);else if (error) reject(error); // eslint-disable-next-line no-throw-literal
    else throw 'unreachable';
  }, [projectContentResponse]);

  async function loadProjectContent(projectId) {
    // we assume there are no concurrent requests
    // eslint-disable-next-line no-throw-literal
    if (resolveRef.current !== null) throw 'unreachable';
    return new Promise((resolve, reject) => {
      resolveRef.current = {
        projectId,
        resolve,
        reject
      };
      executeQuery({
        variables: {
          projectId
        }
      });
    });
  }

  return loadProjectContent;
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useProjectIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useProjectIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/store/projects.js");




const useRemoteProjectsQuery = _misc_hooks__WEBPACK_IMPORTED_MODULE_2__["makeQuery"](graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query RemoteProjects {
    projects {
      id
      name
    }
  }
`);
const useLocalToRemoteIdMap = _misc_hooks__WEBPACK_IMPORTED_MODULE_2__["makeLocalStorage"](json => ({ ...(json !== null ? JSON.parse(json) : null)
}), state => JSON.stringify(state));
/**
 * A curried function remoteProjects => oldMap => newMap that filters out those map entries
 * that do not refer to an existent remote project.
 */

function removeNonexistentMapEntries(remoteProjects) {
  return oldMap => {
    // $FlowExpectError
    const oldEntries = Object.entries(oldMap);
    const newEntries = oldEntries.flatMap(entry => {
      const [_projectUid, remoteId] = entry; // skip any entries that refer to nonexistent remote projects

      if (remoteProjects.findIndex(project => project.id === remoteId) === -1) return [];
      return [entry];
    });
    if (oldEntries.length === newEntries.length) return oldMap;
    const newMap = Object.fromEntries(newEntries);
    return newMap;
  };
}

/**
 * The project index provides all local and remote projects accessible to the IDE,
 * as well as mappings between those.
 * A local (stored in the browser) project can be edited,
 * and such a project can be associated with zero or one remote project.
 * Multiple local projects can refer to the same remote project,
 * such as when attempting an exercise multiple times.
 *
 * This hook allows all relevant project lists and mappings,
 * allows refreshing these lists and editing the mappings,
 * and removes stale mappings in the light of changes to remote projects.
 */
function useProjectIndex() {
  var _remoteProjectsQuery$, _remoteProjectsQuery$2;

  const [localToRemoteIdMap, setLocalToRemoteIdMap] = useLocalToRemoteIdMap('Project-Index');
  const remoteProjectsQuery = useRemoteProjectsQuery();
  const [localProjects, setLocalProjects] = _misc_hooks__WEBPACK_IMPORTED_MODULE_2__["useAsyncState"]([]);

  async function refreshRemoteProjects() {
    var _result$data$projects, _result$data;

    const result = await remoteProjectsQuery.refetch();
    const remoteProjects = (_result$data$projects = (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.projects) !== null && _result$data$projects !== void 0 ? _result$data$projects : [];
    setLocalToRemoteIdMap(removeNonexistentMapEntries(remoteProjects));
  }

  function refreshLocalProjects() {
    setLocalProjects(_core_store_projects__WEBPACK_IMPORTED_MODULE_3__["Project"].getProjects());
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    refreshLocalProjects();
  }, []); // call removeNonexistentMapEntries once after remote projects have initially loaded

  const initialLoadRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](true);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (!initialLoadRef.current || !remoteProjectsQuery.data) return;
    initialLoadRef.current = false;
    const remoteProjects = remoteProjectsQuery.data.projects;
    setLocalToRemoteIdMap(removeNonexistentMapEntries(remoteProjects));
  }, [remoteProjectsQuery.data]);

  function dispatch(action) {
    switch (action.type) {
      case 'REFRESH_LOCAL':
        {
          refreshLocalProjects();
          return;
        }

      case 'REFRESH_REMOTE':
        {
          refreshRemoteProjects();
          return;
        }

      case 'ADD_MAPPING':
        {
          const {
            projectUid,
            remoteId
          } = action;
          setLocalToRemoteIdMap(oldMap => ({ ...oldMap,
            [projectUid]: remoteId
          }));
          return;
        }

      case 'REMOVE_MAPPING':
        {
          const {
            projectUid
          } = action;
          setLocalToRemoteIdMap(({
            [projectUid]: _,
            ...newMap
          }) => newMap);
          return;
        }

      default:
        // eslint-disable-next-line no-throw-literal
        throw 'unreachable';
    }
  }

  const remoteProjects = (_remoteProjectsQuery$ = (_remoteProjectsQuery$2 = remoteProjectsQuery.data) === null || _remoteProjectsQuery$2 === void 0 ? void 0 : _remoteProjectsQuery$2.projects) !== null && _remoteProjectsQuery$ !== void 0 ? _remoteProjectsQuery$ : [];
  const localToRemoteMap = {};
  const remoteToLocalMap = {};

  for (const [projectUid, remoteId0] of Object.entries(localToRemoteIdMap)) {
    // $FlowExpectError
    const remoteId = remoteId0;
    const localProject = localProjects.find(project => project.uid === projectUid);
    const remoteProject = remoteProjects.find(project => project.id === remoteId);

    if (localProject !== undefined && remoteProject !== undefined) {
      localToRemoteMap[projectUid] = remoteProject;
      if (!(remoteId in remoteToLocalMap)) remoteToLocalMap[remoteId] = [];
      remoteToLocalMap[remoteId].push(localProject);
    }
  }

  const state = {
    localProjects,
    remoteProjects,
    localToRemoteMap,
    remoteToLocalMap
  };
  return [state, dispatch];
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useRenameProjectDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRenameProjectDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/core/store/projects.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/useRenameProjectDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.projects.rename_project_dialog.title",
    "defaultMessage": "Rename project"
  },
  description: {
    "id": "app.projects.rename_project_dialog.description",
    "defaultMessage": "Please enter the project's new name."
  },
  label: {
    "id": "app.projects.rename_project_dialog.new_name_label",
    "defaultMessage": "Project Name"
  }
});
function useRenameProjectDialog(onRename, allProjects) {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const [newProjectName, setNewProjectName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');

  function show(project) {
    setOpen(true);
    setConfig({
      project
    });
    setNewProjectName(project.name);
  }

  function onCancel() {
    setOpen(false);
  }

  function onChange(event) {
    const name = event.target.value;
    const nameClean = name.replace(/[^-\w#$%().,:; ]/g, '');
    setNewProjectName(nameClean);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      project
    } = config;
    const success = await onRename(project, newProjectName);

    if (success) {
      setOpen(false);
    }
  }

  const valid = newProjectName !== '' && allProjects.every(project => project.name !== newProjectName);
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 22
          }
        })),
        actions: 'OK_CANCEL',
        onCancel,
        onConfirm,
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
          autoFocus: true,
          margin: "dense",
          id: "name",
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.label, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 20
            }
          })),
          type: "text",
          value: newProjectName,
          onChange: onChange,
          error: !valid,
          fullWidth: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }
        })
      };
    }

  };
}

/***/ }),

/***/ "./src/components/projects/ProjectList/useShareProjectDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useShareProjectDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/store/projects.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/projects/ProjectList/useShareProjectDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.exercises.create_exercise_dialog.title",
    "defaultMessage": "Create new exercise"
  },
  description: {
    "id": "app.exercises.create_exercise_dialog.description",
    "defaultMessage": "Do you want to upload project \"{name}\" as an exercise?"
  }
});
function useShareProjectDialog(onCreate) {
  var _config$localProject$;

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  function show(localProject) {
    setOpen(true);
    setConfig({
      localProject
    });
  }

  function onCancel() {
    setOpen(false);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      localProject
    } = config;
    const success = await onCreate(localProject);

    if (success) {
      setOpen(false);
    }
  }

  const name = (_config$localProject$ = config === null || config === void 0 ? void 0 : config.localProject.name) !== null && _config$localProject$ !== void 0 ? _config$localProject$ : '';
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid: true,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          values: {
            name
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 22
          }
        })),
        actions: 'OK_CANCEL',
        onCancel,
        onConfirm
      };
    }

  };
}

/***/ }),

/***/ "./src/core/store/projects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChild", function() { return getChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescendant", function() { return getDescendant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectError", function() { return ProjectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("filer");
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filer__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const sh = new filer__WEBPACK_IMPORTED_MODULE_0__["fs"].Shell(); // for the IDE relevant fields of fs.stat() results

/**
 * Given a file, returns the named child file.
 * The operation fails if the given file is not a directory,
 * or if the named child does not exist.
 */
function getChild(file, name) {
  if (!file.isDirectory()) throw new Error(`'${file.name}' is not a directory`); // $FlowExpectError

  const directory = file; // Find the child and make sure it exists

  const child = directory.contents.find(f => f.name === name);
  if (child === undefined) throw new Error(`'${name}' does not exist`);
  return child;
}
/**
 * Given a file, returns one of its descendant files.
 * The first fragment must be the name of a child of the given file,
 * The second the name of one of that file's children and so on.
 * The operation fails if an intermediate file file is not a directory,
 * or if a named descendant does not exist.
 */

function getDescendant(file, ...fragments) {
  return fragments.reduce(getChild, file);
}
class ProjectError extends Error {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "name", 'ProjectError');
  }

}

const cmpFile = (a, b) => {
  let result; // sort directories before files (& symlinks)

  const typeVal = f => f.isDirectory() ? 0 : 1;

  result = typeVal(a) - typeVal(b);
  if (result !== 0) return result; // sort alphabetically

  result = a.name.localeCompare(b.name);
  if (result !== 0) return result;
  return 0;
};

class Project {
  constructor(name, uid) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "uid", void 0);

    this.name = name;
    this.uid = uid;
  }

  static async getProjects() {
    const projects = await sh.promises.ls('/');
    projects.sort((a, b) => a.name.localeCompare(b.name));
    return projects.map(({
      name,
      node: uid
    }) => new Project(name, uid));
  }

  static async getProject(name) {
    try {
      const path = filer__WEBPACK_IMPORTED_MODULE_0___default.a.path.resolve('/', name);
      const {
        node: uid
      } = await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.stat(path);
      return new Project(name, uid);
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.ENOENT) throw new ProjectError(`Project "${name}" does not exist`);
      console.error(ex);
      throw ex;
    }
  }

  static async createProject(name) {
    try {
      const path = filer__WEBPACK_IMPORTED_MODULE_0___default.a.path.resolve('/', name);
      await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.mkdir(path);
      const {
        node: uid
      } = await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.stat(path);
      return new Project(name, uid);
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.EEXIST) throw new ProjectError(`Project "${name}" does already exist`);
      console.error(ex);
      throw ex;
    }
  }

  resolve(...fragments) {
    return filer__WEBPACK_IMPORTED_MODULE_0___default.a.path.resolve('/', this.name, ...fragments);
  }

  get path() {
    return this.resolve();
  }

  async getFiles() {
    function sortRecursively(file) {
      if (!file.isDirectory()) return; // $FlowExpectError

      const dir = file;
      dir.contents.sort(cmpFile);
      dir.contents.forEach(f => sortRecursively(f));
    }

    const [root, contents] = await Promise.all([filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.stat(this.path), sh.promises.ls(this.path, {
      recursive: true
    })]);
    root.contents = contents;
    sortRecursively(root);
    return root;
  }

  async rename(newName) {
    try {
      const newPath = filer__WEBPACK_IMPORTED_MODULE_0___default.a.path.resolve('/', newName);
      await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.rename(this.path, newPath);
      this.name = newName;
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.ENOENT) throw new ProjectError(`Project "${this.name}" does no longer exist`);
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.EEXIST) throw new ProjectError(`Project "${newName}" does already exist`);
      console.error(ex);
      throw ex;
    }
  }

  async delete() {
    try {
      // use Shell.rm as it supports recursive removal
      await sh.promises.rm(this.path, {
        recursive: true
      });
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.ENOENT) throw new ProjectError(`Project "${this.name}" does no longer exist`);
      console.error(ex);
      throw ex;
    }
  }

}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLzIuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LnNjc3MiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L25ldFJvYi9IZWRnZWhvZ0lERSAoYW5vdGhlciBjb3B5KS9zcmMvY29tcG9uZW50cy9taXNjL1NpbXBsZURpYWxvZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LnNjc3M/NmJjOCIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L3VzZUNsb25lUmVtb3RlUHJvamVjdERpYWxvZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L3VzZUNyZWF0ZVByb2plY3REaWFsb2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L25ldFJvYi9IZWRnZWhvZ0lERSAoYW5vdGhlciBjb3B5KS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VDcmVhdGVSZW1vdGVQcm9qZWN0LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9uZXRSb2IvSGVkZ2Vob2dJREUgKGFub3RoZXIgY29weSkvc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvdXNlQ3JlYXRlUmVtb3RlUHJvamVjdERpYWxvZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L3VzZURlbGV0ZVByb2plY3REaWFsb2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L25ldFJvYi9IZWRnZWhvZ0lERSAoYW5vdGhlciBjb3B5KS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VEZWxldGVSZW1vdGVQcm9qZWN0LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9uZXRSb2IvSGVkZ2Vob2dJREUgKGFub3RoZXIgY29weSkvc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvdXNlRGVsZXRlUmVtb3RlUHJvamVjdERpYWxvZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L3VzZVByb2plY3RDb250ZW50UXVlcnkuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L25ldFJvYi9IZWRnZWhvZ0lERSAoYW5vdGhlciBjb3B5KS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VQcm9qZWN0SW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L25ldFJvYi9IZWRnZWhvZ0lERSAoYW5vdGhlciBjb3B5KS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VSZW5hbWVQcm9qZWN0RGlhbG9nLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9uZXRSb2IvSGVkZ2Vob2dJREUgKGFub3RoZXIgY29weSkvc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvdXNlU2hhcmVQcm9qZWN0RGlhbG9nLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9uZXRSb2IvSGVkZ2Vob2dJREUgKGFub3RoZXIgY29weSkvc3JjL2NvcmUvc3RvcmUvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBBcHBsaWNhdGlvbiBzcGVjaWZpY1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWhlZGdlaG9nLWdyZWVuLWxpZ2h0OiAjMzhiNDQ5O1xcbiAgLS1oZWRnZWhvZy1ncmVlbi1kYXJrOiAjMDA3YzNjO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLlByb2plY3RMaXN0LWNvbnRhaW5lci1FYlAwbCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC1yb290LTNRdXlaIHtcXG4gIG1hcmdpbjogNDBweCAwO1xcbiAgcGFkZGluZzogMTZweCA4cHg7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC10b29sYmFyLTNsMTlsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC10aXRsZS02ZzNLMyB7XFxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L25ldFJvYi9IZWRnZWhvZ0lERSAoYW5vdGhlciBjb3B5KS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC9Qcm9qZWN0TGlzdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RSxrRUFBa0U7O0VBRWxFOztnRkFFOEU7O0VBRTlFLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsZ0NBQWdDO0VBQ2hDLCtCQUErQjs7RUFFL0I7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDO0NBQzNEOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UscUJBQXFCO01BQ2pCLGFBQWE7Q0FDbEJcIixcImZpbGVcIjpcIlByb2plY3RMaXN0LnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXG59XFxuXFxuLnJvb3Qge1xcbiAgbWFyZ2luOiA0MHB4IDA7XFxuICBwYWRkaW5nOiAxNnB4IDhweDtcXG59XFxuXFxuLnRvb2xiYXIge1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByb2plY3RMaXN0LWNvbnRhaW5lci1FYlAwbFwiLFxuXHRcInJvb3RcIjogXCJQcm9qZWN0TGlzdC1yb290LTNRdXlaXCIsXG5cdFwidG9vbGJhclwiOiBcIlByb2plY3RMaXN0LXRvb2xiYXItM2wxOWxcIixcblx0XCJ0aXRsZVwiOiBcIlByb2plY3RMaXN0LXRpdGxlLTZnM0szXCJcbn07IiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuL2NvbW1vbk1lc3NhZ2VzJztcblxudHlwZSBBY3Rpb25Db25zdGFudCA9ICdPS19DQU5DRUwnIHwgJ09LX2F1dG9mb2N1c19DQU5DRUwnIHwgJ09LX0NBTkNFTF9hdXRvZm9jdXMnO1xuXG50eXBlIFNpbXBsZURpYWxvZ1Byb3BzID0ge3xcbiAgaWQ6IHN0cmluZyxcbiAgb3BlbjogYm9vbGVhbixcbiAgdmFsaWQ6IGJvb2xlYW4sXG4gIHRpdGxlPzogUmVhY3QuTm9kZSxcbiAgZGVzY3JpcHRpb24/OiBSZWFjdC5Ob2RlLFxuICBhY3Rpb25zOiBBY3Rpb25Db25zdGFudCB8IFJlYWN0Lk5vZGUsXG4gIG9uQ2FuY2VsPzogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG4gIG9uQ29uZmlybT86ICgpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+LFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG58fTtcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHRoZSBtYXRlcmlhbC11aSBgRGlhbG9nYCBjb21wb25lbnQgZm9yIGVhc3kgZGlzcGxheSBvZiBkaWFsb2dzXG4gKiB3aXRoIHRpdGxlLCBtYWluIGNvbnRlbnQsIGFuZCBhY3Rpb25zLlxuICogVGhlIGNvbXBvbmVudCB0YWtlcyBjYXJlIG9mIGJhc2ljIEFSSUEgYXR0cmlidXRlcyBmb3IgdGl0bGUgYW5kIGRlc2NyaXB0aW9uLFxuICogYW5kIGRpc3BhdGNoZXMgY2xvc2UgYW5kIHN1Ym1pdCBldmVudHMgdG8gdGhlIGNhbGxpbmcgY29kZS5cbiAqXG4gKiBPbmUgb2YgdGhlIGBBY3Rpb25Db25zdGFudGBzIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgT0svQ2FuY2VsIGJ1dHRvbnMsXG4gKiBvciBhIGN1c3RvbSBsaXN0L2ZyYWdtZW50IG9mIGJ1dHRvbnMgY2FuIGJlIHBhc3NlZC5cbiAqL1xuZnVuY3Rpb24gU2ltcGxlRGlhbG9nKHtcbiAgaWQsXG4gIG9wZW4sXG4gIHZhbGlkLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGFjdGlvbnMsXG4gIG9uQ2FuY2VsLFxuICBvbkNvbmZpcm0sXG4gIGNoaWxkcmVuLFxufTogU2ltcGxlRGlhbG9nUHJvcHMpIHtcbiAgY29uc3QgY29uZGl0aW9uYWxQcm9wcyA9IHt9O1xuICBpZiAodGl0bGUgIT09IHVuZGVmaW5lZCkgY29uZGl0aW9uYWxQcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBgJHtpZH0tdGl0bGVgO1xuICBpZiAoZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkgY29uZGl0aW9uYWxQcm9wc1snYXJpYS1kZXNjcmliZWRieSddID0gYCR7aWR9LWRlc2NyaXB0aW9uYDtcblxuICBsZXQgYWN0aW9uc05vZGU6IFJlYWN0Lk5vZGU7XG4gIHN3aXRjaCAoYWN0aW9ucykge1xuICAgIGNhc2UgJ09LX0NBTkNFTCc6XG4gICAgY2FzZSAnT0tfYXV0b2ZvY3VzX0NBTkNFTCc6XG4gICAgY2FzZSAnT0tfQ0FOQ0VMX2F1dG9mb2N1cyc6XG4gICAgICBhY3Rpb25zTm9kZSA9IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNhbmNlbH1cbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17YWN0aW9ucyA9PT0gJ09LX0NBTkNFTF9hdXRvZm9jdXMnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNIHsuLi5tZXNzYWdlcy5jYW5jZWx9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWxpZH1cbiAgICAgICAgICAgIGF1dG9Gb2N1cz17YWN0aW9ucyA9PT0gJ09LX2F1dG9mb2N1c19DQU5DRUwnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNIHsuLi5tZXNzYWdlcy5va30gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGFjdGlvbnNOb2RlID0gYWN0aW9ucztcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGlmIChvbkNvbmZpcm0gIT09IHVuZGVmaW5lZCkgb25Db25maXJtKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17b25DYW5jZWx9IHsuLi5jb25kaXRpb25hbFByb3BzfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICB7dGl0bGUgIT09IHVuZGVmaW5lZCA/IDxEaWFsb2dUaXRsZSBpZD17YCR7aWR9LXRpdGxlYH0+e3RpdGxlfTwvRGlhbG9nVGl0bGU+IDogbnVsbH1cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQgaWQ9e2Ake2lkfS1kZXNjcmlwdGlvbmB9PntkZXNjcmlwdGlvbn08L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9ucz57YWN0aW9uc05vZGV9PC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9mb3JtPlxuICAgIDwvRGlhbG9nPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVEaWFsb2c7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlcyc7XG5pbXBvcnQgeyBkZWZpbmVNZXNzYWdlcywgdXNlSW50bCwgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgUG9wdXBTdGF0ZSwgeyBiaW5kVHJpZ2dlciwgYmluZE1lbnUgfSBmcm9tICdtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZSc7XG5cbmltcG9ydCB7XG4gIExvY2FsUHJvamVjdEljb24sXG4gIFVwbG9hZEV4ZXJjaXNlSWNvbixcbiAgQ3JlYXRlSWNvbixcbiAgT3Blbkljb24sXG4gIFJlbmFtZUljb24sXG4gIERlbGV0ZUljb24sXG4gIFJlZnJlc2hJY29uLFxufSBmcm9tICcuLi8uLi9taXNjL3BhbGV0dGUnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9taXNjL0xpbmsnO1xuaW1wb3J0IFNpbXBsZURpYWxvZyBmcm9tICcuLi8uLi9taXNjL1NpbXBsZURpYWxvZyc7XG5pbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuaW1wb3J0IHMgZnJvbSAnLi9Qcm9qZWN0TGlzdC5zY3NzJztcbmltcG9ydCB1c2VTaGFyZVByb2plY3REaWFsb2cgZnJvbSAnLi91c2VTaGFyZVByb2plY3REaWFsb2cnO1xuaW1wb3J0IHVzZUNyZWF0ZVByb2plY3REaWFsb2cgZnJvbSAnLi91c2VDcmVhdGVQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB1c2VEZWxldGVQcm9qZWN0RGlhbG9nIGZyb20gJy4vdXNlRGVsZXRlUHJvamVjdERpYWxvZyc7XG5pbXBvcnQgdXNlUmVuYW1lUHJvamVjdERpYWxvZyBmcm9tICcuL3VzZVJlbmFtZVByb2plY3REaWFsb2cnO1xuaW1wb3J0IHVzZUNyZWF0ZVJlbW90ZVByb2plY3REaWFsb2cgZnJvbSAnLi91c2VDcmVhdGVSZW1vdGVQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB1c2VEZWxldGVSZW1vdGVQcm9qZWN0RGlhbG9nIGZyb20gJy4vdXNlRGVsZXRlUmVtb3RlUHJvamVjdERpYWxvZyc7XG5pbXBvcnQgdXNlQ2xvbmVSZW1vdGVQcm9qZWN0RGlhbG9nIGZyb20gJy4vdXNlQ2xvbmVSZW1vdGVQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB1c2VQcm9qZWN0SW5kZXgsIHsgdHlwZSBSZW1vdGVQcm9qZWN0IH0gZnJvbSAnLi91c2VQcm9qZWN0SW5kZXgnO1xuaW1wb3J0IHVzZUNyZWF0ZVJlbW90ZVByb2plY3QgZnJvbSAnLi91c2VDcmVhdGVSZW1vdGVQcm9qZWN0JztcbmltcG9ydCB1c2VEZWxldGVSZW1vdGVQcm9qZWN0IGZyb20gJy4vdXNlRGVsZXRlUmVtb3RlUHJvamVjdCc7XG5pbXBvcnQgdXNlUHJvamVjdENvbnRlbnRRdWVyeSwgeyBwb3B1bGF0ZVByb2plY3QgfSBmcm9tICcuL3VzZVByb2plY3RDb250ZW50UXVlcnknO1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXNlcnMvQXV0aFByb3ZpZGVyJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIHByb2plY3RzVGl0bGU6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5saXN0X3RpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIHNob3duIGFib3ZlIHRoZSBwcm9qZWN0IGxpc3QnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnWW91ciBQcm9qZWN0cycsXG4gIH0sXG4gIGNyZWF0ZVByb2plY3RUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMuY3JlYXRlX3Byb2plY3RfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgY3JlYXRlIHByb2plY3QgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NyZWF0ZSBQcm9qZWN0JyxcbiAgfSxcbiAgcmVmcmVzaFByb2plY3RMaXN0VG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLnJlZnJlc2hfcHJvamVjdF9saXN0X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIHJlZnJlc2ggcHJvamVjdHMgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1JlZnJlc2ggUHJvamVjdCBMaXN0JyxcbiAgfSxcbiAgc2hhcmVQcm9qZWN0VG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLnNoYXJlX3Byb2plY3RfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgc2hhcmUgcHJvamVjdCBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnU2hhcmUgUHJvamVjdCBcIntuYW1lfVwiJyxcbiAgfSxcbiAgcmVuYW1lUHJvamVjdFRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5yZW5hbWVfcHJvamVjdF90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSByZW5hbWUgcHJvamVjdCBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUmVuYW1lIFByb2plY3QgXCJ7bmFtZX1cIicsXG4gIH0sXG4gIGRlbGV0ZVByb2plY3RUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMuZGVsZXRlX3Byb2plY3RfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgZGVsZXRlIHByb2plY3QgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0RlbGV0ZSBQcm9qZWN0IFwie25hbWV9XCInLFxuICB9LFxuICBleGVyY2lzZXNUaXRsZToge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5saXN0X3RpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIHNob3duIGFib3ZlIHRoZSBleGVyY2lzZXMgbGlzdCcsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdSZW1vdGUgUHJvamVrdHMnLFxuICB9LFxuICByZWZyZXNoRXhlcmNpc2VMaXN0VG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5yZWZyZXNoX2V4ZXJjaXNlX2xpc3RfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgcmVmcmVzaCBleGVyY2lzZXMgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1JlZnJlc2ggRXhlcmNpc2UgTGlzdCcsXG4gIH0sXG4gIGV4ZXJjaXNlU2Vjb25kYXJ5VGV4dDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5zZWNvbmRhcnlfdGV4dCcsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIHRleHQgaXMgc2hvd24gYmVsb3cgdGhlIGV4ZXJjaXNlIG5hbWUgYW5kIGRlc2NyaWJlcyBpdCBmdXJ0aGVyJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0RpZmZpY3VsdHk6IHtsZXZlbH0nLFxuICB9LFxuICB1cGxvYWRFeGVyY2lzZVRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMudXBsb2FkX2V4ZXJjaXNlX3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIHVwbG9hZCBleGVyY2lzZSBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnVXBsb2FkIHByb2plY3QgXCJ7bmFtZX1cIiBhcyBhbiBleGVyY2lzZScsXG4gIH0sXG4gIGNsb25lRXhlcmNpc2VUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmNsb25lX2V4ZXJjaXNlX3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIGNsb25lIGV4ZXJjaXNlIGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgbmV3IHByb2plY3QgdG8gd29yayBvbiBleGVyY2lzZSBcIntuYW1lfVwiJyxcbiAgfSxcbiAgb3BlbkFzc29jaWF0ZWRQcm9qZWN0VG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5vcGVuX2Fzc29jaWF0ZWRfcHJvamVjdF90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIG9wZW4gcHJvamVjdCBidXR0b24uIFRoYXQgYnV0dG9uIGlzIHNob3duIGlmIHRoZXJlJ3MgZXhhY3RseSBvbmUgYXNzb2NpYXRlZCBwcm9qZWN0LlwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnT3BlbiBwcm9qZWN0IFwie25hbWV9XCIgdG8gd29yayBvbiBleGVyY2lzZSBcIntleGVyY2lzZX1cIicsXG4gIH0sXG4gIG9wZW5Bc3NvY2lhdGVkUHJvamVjdE1lbnVUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLm9wZW5fYXNzb2NpYXRlZF9wcm9qZWN0X21lbnVfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIG9wZW4gcHJvamVjdCBtZW51IGJ1dHRvbi4gVGhhdCBidXR0b24gaXMgc2hvd24gaWYgdGhlcmUgYXJlIHR3byBvciBtb3JlIGFzc29jaWF0ZWQgcHJvamVjdHMuJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ09wZW4gYW4gZXhpc3RpbmcgcHJvamVjdCB0byB3b3JrIG9uIGV4ZXJjaXNlIFwie2V4ZXJjaXNlfVwiJyxcbiAgfSxcbiAgb3BlbkFzc29jaWF0ZWRQcm9qZWN0TWVudUl0ZW06IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMub3Blbl9hc3NvY2lhdGVkX3Byb2plY3RfbWVudV9pdGVtJyxcbiAgICBkZXNjcmlwdGlvbjogJ3RleHQgZm9yIHRoZSBtZW51IGl0ZW1zIGluIHRoZSBhc3NvY2lhdGVkIHByb2plY3RzIG1lbnUuJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ09wZW4gcHJvamVjdCBcIntuYW1lfVwiJyxcbiAgfSxcbiAgZWRpdEV4ZXJjaXNlVG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5lZGl0X2V4ZXJjaXNlX3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIGVkaXQgZXhlcmNpc2UgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0VkaXQgRXhlcmNpc2UgXCJ7bmFtZX1cIicsXG4gIH0sXG4gIGRlbGV0ZUV4ZXJjaXNlVG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5kZWxldGVfZXhlcmNpc2VfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgZGVsZXRlIGV4ZXJjaXNlIGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdEZWxldGUgRXhlcmNpc2UgXCJ7bmFtZX1cIicsXG4gIH0sXG59KTtcblxudHlwZSBQcm9wcyA9IHt8fH07XG5cbi8qKlxuICogVGhlIFByb2plY3RMaXN0IGNvbXBvbmVudCBoYXMgdHdvIHB1cnBvc2VzOlxuICogc2hvdyBhIGxpc3Qgb2YgbG9jYWwgcHJvamVjdHMgKHN0b3JlZCBpbiB0aGUgXCJmaWxlclwiIGJyb3dzZXIgZmlsZSBzeXN0ZW0pLFxuICogYW5kIHNob3cgYSBsaXN0IG9mIHJlbW90ZSBwcm9qZWN0cyAoYWNjZXNzZWQgdmlhIEdyYXBoUUwpLlxuICogVGhlIGNvbXBvbmVudCBhbGxvd3MgbWFuYWdpbmcgbG9jYWwgcHJvamVjdHMgYW5kLCBmb3IgbG9nZ2VkIGluIHVzZXJzLCByZW1vdGUgcHJvamVjdHMgYXMgd2VsbC5cbiAqL1xuZnVuY3Rpb24gUHJvamVjdExpc3QoX3Byb3BzOiBQcm9wcykge1xuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xuICBjb25zdCBpbnRsID0gdXNlSW50bCgpO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RNdXRhdGlvbiA9IHVzZUNyZWF0ZVJlbW90ZVByb2plY3QoKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdE11dGF0aW9uID0gdXNlRGVsZXRlUmVtb3RlUHJvamVjdCgpO1xuICBjb25zdCBsb2FkUHJvamVjdENvbnRlbnQgPSB1c2VQcm9qZWN0Q29udGVudFF1ZXJ5KCk7XG5cbiAgY29uc3QgW1xuICAgIHsgbG9jYWxQcm9qZWN0cywgcmVtb3RlUHJvamVjdHMsIGxvY2FsVG9SZW1vdGVNYXAsIHJlbW90ZVRvTG9jYWxNYXAgfSxcbiAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCxcbiAgXSA9IHVzZVByb2plY3RJbmRleCgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1DcmVhdGVQcm9qZWN0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBQcm9qZWN0LmNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoIShleCBpbnN0YW5jZW9mIFByb2plY3RFcnJvcikpIHRocm93IGV4O1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gdXNlQ3JlYXRlUHJvamVjdERpYWxvZyhjb25maXJtQ3JlYXRlUHJvamVjdCwgbG9jYWxQcm9qZWN0cyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybURlbGV0ZVByb2plY3QocHJvamVjdDogUHJvamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBwcm9qZWN0LmRlbGV0ZSgpO1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX01BUFBJTkcnLCBwcm9qZWN0VWlkOiBwcm9qZWN0LnVpZCB9KTtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmICghKGV4IGluc3RhbmNlb2YgUHJvamVjdEVycm9yKSkgdGhyb3cgZXg7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gdXNlRGVsZXRlUHJvamVjdERpYWxvZyhjb25maXJtRGVsZXRlUHJvamVjdCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybVJlbmFtZVByb2plY3QocHJvamVjdDogUHJvamVjdCwgbmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHByb2plY3QucmVuYW1lKG5ld05hbWUpO1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKCEoZXggaW5zdGFuY2VvZiBQcm9qZWN0RXJyb3IpKSB0aHJvdyBleDtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFyZVByb2plY3QgPSB1c2VTaGFyZVByb2plY3REaWFsb2coY29uZmlybVNoYXJlUHJvamVjdCxsb2NhbFByb2plY3RzKVxuICBhc3luYyBmdW5jdGlvbiBjb25maXJtU2hhcmVQcm9qZWN0KGxvY2FsUHJvamVjdDogUHJvamVjdCk6IFByb21pc2UgPGJvb29sZWFuPntcbiAgICBjb25zdCBpZCA9IGF3YWl0IGNyZWF0ZVByb2plY3RNdWF0aW9uKGxvY2FsUHJvamVjdCk7XG4gICAgcHJvamVjdEluZGV4RGlzcGF0Y2goe1xuICAgICAgdHlwZTonQWRkX01BUFBJTkcnLFxuICAgICAgcHJvamVjdFVpZDogbG9jYWxQcm9qZWN0LnVpZCxcbiAgICAgIHJlbW90ZUlkOiBpZCwgXG4gICAgfSk7XG4gICAgcHJvamVjdEluZGV4RGlzcGF0Y2goe3R5cGU6ICdSRUZSRVNIX1JFTU9URSd9KVxuICAgIHJldHVybiB0cnVlOyBcbiAgfVxuICBjb25zdCByZW5hbWVQcm9qZWN0ID0gdXNlUmVuYW1lUHJvamVjdERpYWxvZyhjb25maXJtUmVuYW1lUHJvamVjdCwgbG9jYWxQcm9qZWN0cyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybUNyZWF0ZVJlbW90ZVByb2plY3QobG9jYWxQcm9qZWN0OiBQcm9qZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaWQgPSBhd2FpdCBjcmVhdGVQcm9qZWN0TXV0YXRpb24obG9jYWxQcm9qZWN0KTtcbiAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnQUREX01BUFBJTkcnLFxuICAgICAgcHJvamVjdFVpZDogbG9jYWxQcm9qZWN0LnVpZCxcbiAgICAgIHJlbW90ZUlkOiBpZCxcbiAgICB9KTtcbiAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX1JFTU9URScgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBjcmVhdGVSZW1vdGVQcm9qZWN0ID0gdXNlQ3JlYXRlUmVtb3RlUHJvamVjdERpYWxvZyhjb25maXJtQ3JlYXRlUmVtb3RlUHJvamVjdCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybURlbGV0ZVJlbW90ZVByb2plY3QocHJvamVjdDogUmVtb3RlUHJvamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGF3YWl0IGRlbGV0ZVByb2plY3RNdXRhdGlvbihwcm9qZWN0LmlkKTtcbiAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX1JFTU9URScgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBkZWxldGVSZW1vdGVQcm9qZWN0ID0gdXNlRGVsZXRlUmVtb3RlUHJvamVjdERpYWxvZyhjb25maXJtRGVsZXRlUmVtb3RlUHJvamVjdCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybUNsb25lUmVtb3RlUHJvamVjdChwcm9qZWN0OiBSZW1vdGVQcm9qZWN0LCBuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBsZXQgY29udGVudDtcbiAgICB0cnkge1xuICAgICAgY29udGVudCA9IGF3YWl0IGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0LmlkKTtcbiAgICB9IGNhdGNoIChfZXgpIHtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfUkVNT1RFJyB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NhbFByb2plY3QgPSBhd2FpdCBQcm9qZWN0LmNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgICBhd2FpdCBwb3B1bGF0ZVByb2plY3QobG9jYWxQcm9qZWN0LCBjb250ZW50KTtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pO1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnQUREX01BUFBJTkcnLFxuICAgICAgICBwcm9qZWN0VWlkOiBsb2NhbFByb2plY3QudWlkLFxuICAgICAgICByZW1vdGVJZDogcHJvamVjdC5pZCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmICghKGV4IGluc3RhbmNlb2YgUHJvamVjdEVycm9yKSkgdGhyb3cgZXg7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbG9uZVJlbW90ZVByb2plY3QgPSB1c2VDbG9uZVJlbW90ZVByb2plY3REaWFsb2coY29uZmlybUNsb25lUmVtb3RlUHJvamVjdCwgbG9jYWxQcm9qZWN0cyk7XG5cbiAgY29uc3QgaXNMb2dnZWRJbiA9ICEhYXV0aC5hdXRoRGF0YTtcblxuICB1c2VTdHlsZXMocyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtzLnRvb2xiYXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17cy50aXRsZX0gdmFyaWFudD1cImg1XCIgbm9XcmFwPlxuICAgICAgICAgICAgPE0gey4uLm1lc3NhZ2VzLnByb2plY3RzVGl0bGV9IC8+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuY3JlYXRlUHJvamVjdFRvb2x0aXApfSBwbGFjZW1lbnQ9XCJib3R0b21cIj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jcmVhdGVQcm9qZWN0VG9vbHRpcCl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NyZWF0ZVByb2plY3Quc2hvd31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENyZWF0ZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVmcmVzaFByb2plY3RMaXN0VG9vbHRpcCl9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVmcmVzaFByb2plY3RMaXN0VG9vbHRpcCl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmVmcmVzaEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge2xvY2FsUHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtwcm9qZWN0Lm5hbWV9IGJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPXtgL3Byb2plY3RzLyR7cHJvamVjdC5uYW1lfWB9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxMb2NhbFByb2plY3RJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvamVjdC5uYW1lfSAvPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnVwbG9hZEV4ZXJjaXNlVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnVwbG9hZEV4ZXJjaXNlVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9qZWN0LnVpZCBpbiBsb2NhbFRvUmVtb3RlTWFwfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVJlbW90ZVByb2plY3Quc2hvdyhwcm9qZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRFeGVyY2lzZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJlbmFtZVByb2plY3RUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVuYW1lUHJvamVjdFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW5hbWVQcm9qZWN0LnNob3cocHJvamVjdCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxSZW5hbWVJY29uIC8+XG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRlbGV0ZVByb2plY3RUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRlbGV0ZVByb2plY3RUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUHJvamVjdC5zaG93KHByb2plY3QpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgICAgPFNpbXBsZURpYWxvZyBpZD1cImNyZWF0ZS1kaWFsb2dcIiB7Li4uY3JlYXRlUHJvamVjdC5tb3VudFNpbXBsZURpYWxvZygpfSAvPlxuICAgICAgICA8U2ltcGxlRGlhbG9nIGlkPVwic2hhcmUtZGlhbG9nXCIgey4uLnNoYXJlUHJvamVjdC5tb3VudFNpbXBsZURpYWxvZygpfSAvPlxuICAgICAgICA8U2ltcGxlRGlhbG9nIGlkPVwiZGVsZXRlLWRpYWxvZ1wiIHsuLi5kZWxldGVQcm9qZWN0Lm1vdW50U2ltcGxlRGlhbG9nKCl9IC8+XG4gICAgICAgIDxTaW1wbGVEaWFsb2cgaWQ9XCJyZW5hbWUtZGlhbG9nXCIgey4uLnJlbmFtZVByb2plY3QubW91bnRTaW1wbGVEaWFsb2coKX0gLz5cbiAgICAgICAgPFNpbXBsZURpYWxvZyBpZD1cImNyZWF0ZS1yZW1vdGUtZGlhbG9nXCIgey4uLmNyZWF0ZVJlbW90ZVByb2plY3QubW91bnRTaW1wbGVEaWFsb2coKX0gLz5cbiAgICAgIDwvUGFwZXI+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e3MudG9vbGJhcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzLnRpdGxlfSB2YXJpYW50PVwiaDVcIiBub1dyYXA+XG4gICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMuZXhlcmNpc2VzVGl0bGV9IC8+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJlZnJlc2hFeGVyY2lzZUxpc3RUb29sdGlwKX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZWZyZXNoRXhlcmNpc2VMaXN0VG9vbHRpcCl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfUkVNT1RFJyB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlZnJlc2hJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIHtyZW1vdGVQcm9qZWN0cy5tYXAoKGV4ZXJjaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3NvY2lhdGVkUHJvamVjdHMgPSByZW1vdGVUb0xvY2FsTWFwW2V4ZXJjaXNlLmlkXSA/PyBbXTtcblxuICAgICAgICAgICAgY29uc3QgaGFzT3BlbkNvbW1hbmQgPSBhc3NvY2lhdGVkUHJvamVjdHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc09wZW5Qb3B1cCA9IGFzc29jaWF0ZWRQcm9qZWN0cy5sZW5ndGggPiAxO1xuICAgICAgICAgICAgY29uc3QgaGFzQWRtaW5Db21tYW5kcyA9IGlzTG9nZ2VkSW47XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2V4ZXJjaXNlLmlkfSBidXR0b24+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPExvY2FsUHJvamVjdEljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17ZXhlcmNpc2UubmFtZX1cbiAgICAgICAgICAgICAgICAgIC8vIHNlY29uZGFyeT17aW50bC5mb3JtYXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgLy8gICBtZXNzYWdlcy5leGVyY2lzZVNlY29uZGFyeVRleHQsXG4gICAgICAgICAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAgICAgICAgIC8vICAgICAuLi5leGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgICAgIC8vICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNsb25lRXhlcmNpc2VUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgey4uLighaGFzT3BlbkNvbW1hbmQgPyB7IGVkZ2U6ICdlbmQnIH0gOiB7fSl9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNsb25lRXhlcmNpc2VUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb25lUmVtb3RlUHJvamVjdC5zaG93KGV4ZXJjaXNlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIHshaGFzT3BlbkNvbW1hbmQgPyBudWxsIDogIWhhc09wZW5Qb3B1cCA/IChcbiAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRlZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMub3BlbkFzc29jaWF0ZWRQcm9qZWN0VG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4oIWhhc0FkbWluQ29tbWFuZHMgPyB7IGVkZ2U6ICdlbmQnIH0gOiB7fSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5vcGVuQXNzb2NpYXRlZFByb2plY3RUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2U6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9wcm9qZWN0cy8ke3Byb2plY3QubmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Blbkljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8UG9wdXBTdGF0ZSB2YXJpYW50PVwicG9wb3ZlclwiIHBvcHVwSWQ9e2Ake2V4ZXJjaXNlLm5hbWV9LW1lbnVgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7KHBvcHVwU3RhdGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5vcGVuQXNzb2NpYXRlZFByb2plY3RNZW51VG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2U6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKCFoYXNBZG1pbkNvbW1hbmRzID8geyBlZGdlOiAnZW5kJyB9IDoge30pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmJpbmRUcmlnZ2VyKHBvcHVwU3RhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5vcGVuQXNzb2NpYXRlZFByb2plY3RNZW51VG9vbHRpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleGVyY2lzZTogZXhlcmNpc2UubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3Blbkljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5iaW5kTWVudShwb3B1cFN0YXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc3NvY2lhdGVkUHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvcHJvamVjdHMvJHtwcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ubWVzc2FnZXMub3BlbkFzc29jaWF0ZWRQcm9qZWN0TWVudUl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7IG5hbWU6IHByb2plY3QubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3B1cFN0YXRlPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHshaGFzQWRtaW5Db21tYW5kcyA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZWRpdEV4ZXJjaXNlVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5lZGl0RXhlcmNpc2VUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IC4uLn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbmFtZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGVsZXRlRXhlcmNpc2VUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kZWxldGVFeGVyY2lzZVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUmVtb3RlUHJvamVjdC5zaG93KGV4ZXJjaXNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgICA8U2ltcGxlRGlhbG9nIGlkPVwiY2xvbmUtcmVtb3RlLWRpYWxvZ1wiIHsuLi5jbG9uZVJlbW90ZVByb2plY3QubW91bnRTaW1wbGVEaWFsb2coKX0gLz5cbiAgICAgICAgPFNpbXBsZURpYWxvZyBpZD1cImRlbGV0ZS1yZW1vdGUtZGlhbG9nXCIgey4uLmRlbGV0ZVJlbW90ZVByb2plY3QubW91bnRTaW1wbGVEaWFsb2coKX0gLz5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0O1xuIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9Qcm9qZWN0TGlzdC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vUHJvamVjdExpc3Quc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vUHJvamVjdExpc3Quc2Nzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVNZXNzYWdlcywgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcblxuaW1wb3J0IFNpbXBsZURpYWxvZyBmcm9tICcuLi8uLi9taXNjL1NpbXBsZURpYWxvZyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcbmltcG9ydCB7IHR5cGUgUmVtb3RlUHJvamVjdCB9IGZyb20gJy4vdXNlUHJvamVjdEluZGV4JztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIHRpdGxlOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmNsb25lX2V4ZXJjaXNlX2RpYWxvZy50aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBmb3IgdGhlIGV4ZXJjaXNlIGNsb25pbmcgZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NyZWF0ZSBuZXcgcHJvamVjdCcsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmNsb25lX2V4ZXJjaXNlX2RpYWxvZy5kZXNjcmlwdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IGZvciB0aGUgZXhlcmNpc2UgY2xvbmluZyBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUGxlYXNlIGVudGVyIHRoZSBwcm9qZWN0IG5hbWUgZm9yIHdvcmtpbmcgb24gZXhlcmNpc2UgXCJ7bmFtZX1cIi4nLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5jbG9uZV9leGVyY2lzZV9kaWFsb2cubmV3X25hbWVfbGFiZWwnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhYmVsIGZvciB0aGUgZXhlcmNpc2UgY2xvbmluZyBkaWFsb2cncyB0ZXh0IGZpZWxkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdQcm9qZWN0IE5hbWUnLFxuICB9LFxufSk7XG5cbnR5cGUgU2ltcGxlRGlhbG9nUHJvcHMgPSBSZWFjdC5FbGVtZW50UHJvcHM8dHlwZW9mIFNpbXBsZURpYWxvZz47XG5cbi8vIHRoaXMgdHlwZSBoYXMgYWxsIHByb3BlcnRpZXMgdGhhdCBhcmUgZ2VuZXJhdGVkIGJ5IG1vdW50U2ltcGxlRGlhbG9nKClcbnR5cGUgTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzID0gJERpZmY8XG4gIFNpbXBsZURpYWxvZ1Byb3BzLFxuICAvLyB0aGVzZSBhcmUgdGhlIG9uZXMgdGhhdCBhcmVuJ3RcbiAge3xcbiAgICBpZDogJFByb3BlcnR5VHlwZTxTaW1wbGVEaWFsb2dQcm9wcywgJ2lkJz4sXG4gIHx9LFxuPjtcblxudHlwZSBDbG9uZVJlbW90ZVByb2plY3REaWFsb2dIb29rID0ge3xcbiAgc2hvdyhwcm9qZWN0OiBSZW1vdGVQcm9qZWN0KTogdm9pZCxcbiAgbW91bnRTaW1wbGVEaWFsb2coKTogTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzLFxufH07XG5cbnR5cGUgQ29uZmlnID0ge3xcbiAgcHJvamVjdDogUmVtb3RlUHJvamVjdCxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDbG9uZVJlbW90ZVByb2plY3REaWFsb2coXG4gIG9uQ3JlYXRlOiAocHJvamVjdDogUmVtb3RlUHJvamVjdCwgbmFtZTogc3RyaW5nKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPixcbiAgYWxsUHJvamVjdHM6IFByb2plY3RbXSxcbik6IENsb25lUmVtb3RlUHJvamVjdERpYWxvZ0hvb2sge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxDb25maWcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW25ld1Byb2plY3ROYW1lLCBzZXROZXdQcm9qZWN0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBmdW5jdGlvbiBzaG93KHByb2plY3Q6IFJlbW90ZVByb2plY3QpIHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldENvbmZpZyh7IHByb2plY3QgfSk7XG4gICAgc2V0TmV3UHJvamVjdE5hbWUoJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZUNsZWFuID0gbmFtZS5yZXBsYWNlKC9bXi1cXHcjJCUoKS4sOjsgXS9nLCAnJyk7XG4gICAgc2V0TmV3UHJvamVjdE5hbWUobmFtZUNsZWFuKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghb3BlbikgdGhyb3cgJ2RpYWxvZyBpcyBub3Qgc2hvd24nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gY29uZmlnO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IG9uQ3JlYXRlKHByb2plY3QsIG5ld1Byb2plY3ROYW1lKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFsaWQgPVxuICAgIG5ld1Byb2plY3ROYW1lICE9PSAnJyAmJiBhbGxQcm9qZWN0cy5ldmVyeSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lICE9PSBuZXdQcm9qZWN0TmFtZSk7XG5cbiAgY29uc3QgbmFtZSA9IGNvbmZpZz8ucHJvamVjdC5uYW1lID8/ICcnO1xuXG4gIHJldHVybiB7XG4gICAgc2hvdyxcbiAgICBtb3VudFNpbXBsZURpYWxvZygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW4sXG4gICAgICAgIHZhbGlkLFxuICAgICAgICB0aXRsZTogPE0gey4uLm1lc3NhZ2VzLnRpdGxlfSAvPixcbiAgICAgICAgZGVzY3JpcHRpb246IDxNIHsuLi5tZXNzYWdlcy5kZXNjcmlwdGlvbn0gdmFsdWVzPXt7IG5hbWUgfX0gLz4sXG4gICAgICAgIGFjdGlvbnM6ICdPS19DQU5DRUwnLFxuICAgICAgICBvbkNhbmNlbCxcbiAgICAgICAgb25Db25maXJtLFxuICAgICAgICBjaGlsZHJlbjogKFxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPXs8TSB7Li4ubWVzc2FnZXMubGFiZWx9IC8+fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e25ld1Byb2plY3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgZXJyb3I9eyF2YWxpZH1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIC8+XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVNZXNzYWdlcywgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcblxuaW1wb3J0IFNpbXBsZURpYWxvZyBmcm9tICcuLi8uLi9taXNjL1NpbXBsZURpYWxvZyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIHRpdGxlOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMuY3JlYXRlX3Byb2plY3RfZGlhbG9nLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZvciB0aGUgcHJvamVjdCBjcmVhdGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ3JlYXRlIG5ldyBwcm9qZWN0JyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5jcmVhdGVfcHJvamVjdF9kaWFsb2cuZGVzY3JpcHRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBmb3IgdGhlIHByb2plY3QgY3JlYXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgdGhlIG5ldyBwcm9qZWN0J3MgbmFtZS5cIixcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5jcmVhdGVfcHJvamVjdF9kaWFsb2cubmV3X25hbWVfbGFiZWwnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhYmVsIGZvciB0aGUgcHJvamVjdCBjcmVhdGlvbiBkaWFsb2cncyB0ZXh0IGZpZWxkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdQcm9qZWN0IE5hbWUnLFxuICB9LFxufSk7XG5cbnR5cGUgU2ltcGxlRGlhbG9nUHJvcHMgPSBSZWFjdC5FbGVtZW50UHJvcHM8dHlwZW9mIFNpbXBsZURpYWxvZz47XG5cbi8vIHRoaXMgdHlwZSBoYXMgYWxsIHByb3BlcnRpZXMgdGhhdCBhcmUgZ2VuZXJhdGVkIGJ5IG1vdW50U2ltcGxlRGlhbG9nKClcbnR5cGUgTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzID0gJERpZmY8XG4gIFNpbXBsZURpYWxvZ1Byb3BzLFxuICAvLyB0aGVzZSBhcmUgdGhlIG9uZXMgdGhhdCBhcmVuJ3RcbiAge3xcbiAgICBpZDogJFByb3BlcnR5VHlwZTxTaW1wbGVEaWFsb2dQcm9wcywgJ2lkJz4sXG4gIHx9LFxuPjtcblxudHlwZSBDcmVhdGVQcm9qZWN0RGlhbG9nSG9vayA9IHt8XG4gIHNob3coKTogdm9pZCxcbiAgbW91bnRTaW1wbGVEaWFsb2coKTogTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNyZWF0ZVByb2plY3REaWFsb2coXG4gIG9uQ3JlYXRlOiAoc3RyaW5nKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPixcbiAgYWxsUHJvamVjdHM6IFByb2plY3RbXSxcbik6IENyZWF0ZVByb2plY3REaWFsb2dIb29rIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbbmV3UHJvamVjdE5hbWUsIHNldE5ld1Byb2plY3ROYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgICBzZXROZXdQcm9qZWN0TmFtZSgnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lQ2xlYW4gPSBuYW1lLnJlcGxhY2UoL1teLVxcdyMkJSgpLiw6OyBdL2csICcnKTtcbiAgICBzZXROZXdQcm9qZWN0TmFtZShuYW1lQ2xlYW4pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Db25maXJtKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFvcGVuKSB0aHJvdyAnZGlhbG9nIGlzIG5vdCBzaG93bic7XG5cbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgb25DcmVhdGUobmV3UHJvamVjdE5hbWUpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YWxpZCA9XG4gICAgbmV3UHJvamVjdE5hbWUgIT09ICcnICYmIGFsbFByb2plY3RzLmV2ZXJ5KChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgIT09IG5ld1Byb2plY3ROYW1lKTtcblxuICByZXR1cm4ge1xuICAgIHNob3csXG4gICAgbW91bnRTaW1wbGVEaWFsb2coKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGVuLFxuICAgICAgICB2YWxpZCxcbiAgICAgICAgdGl0bGU6IDxNIHsuLi5tZXNzYWdlcy50aXRsZX0gLz4sXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8TSB7Li4ubWVzc2FnZXMuZGVzY3JpcHRpb259IC8+LFxuICAgICAgICBhY3Rpb25zOiAnT0tfQ0FOQ0VMJyxcbiAgICAgICAgb25DYW5jZWwsXG4gICAgICAgIG9uQ29uZmlybSxcbiAgICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBsYWJlbD17PE0gey4uLm1lc3NhZ2VzLmxhYmVsfSAvPn1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQcm9qZWN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGVycm9yPXshdmFsaWR9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAvPlxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGZzIH0gZnJvbSAnZmlsZXInO1xuaW1wb3J0IGJhc2U2NCBmcm9tICdiYXNlNjQtanMnO1xuXG5pbXBvcnQgKiBhcyBob29rcyBmcm9tICcuLi8uLi9taXNjL2hvb2tzJztcblxuaW1wb3J0IHtcbiAgUHJvamVjdCxcbiAgdHlwZSBGaWxlclN0YXRJbmZvLFxuICB0eXBlIEZpbGVyUmVjdXJzaXZlRGlyZWN0b3J5SW5mbyxcbn0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmltcG9ydCB7XG4gIHR5cGUgQ3JlYXRlUHJvamVjdCxcbiAgdHlwZSBDcmVhdGVQcm9qZWN0VmFyaWFibGVzLFxuICB0eXBlIFByb2plY3RJbnB1dCxcbiAgdHlwZSBGaWxlVHJlZUZpbGVSZWNvcmRJbnB1dCxcbiAgdHlwZSBGaWxlVHJlZVRyZWVSZWNvcmRJbnB1dCxcbn0gZnJvbSAnLi9fX2dlbmVyYXRlZF9fL0NyZWF0ZVByb2plY3QnO1xuXG5jb25zdCB1c2VDcmVhdGVQcm9qZWN0TXV0YXRpb24gPSBob29rcy5tYWtlTXV0YXRpb248Q3JlYXRlUHJvamVjdCwgQ3JlYXRlUHJvamVjdFZhcmlhYmxlcz4oZ3FsYFxuICBtdXRhdGlvbiBDcmVhdGVQcm9qZWN0KCRwcm9qZWN0SW5wdXQ6IFByb2plY3RJbnB1dCEpIHtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3Q6ICRwcm9qZWN0SW5wdXQpXG4gIH1cbmApO1xuXG5hc3luYyBmdW5jdGlvbiBwcm9qZWN0VG9JbnB1dChwcm9qZWN0OiBQcm9qZWN0KTogUHJvbWlzZTxQcm9qZWN0SW5wdXQ+IHtcbiAgYXN5bmMgZnVuY3Rpb24gdmlzaXRGaWxlKGZpbGU6IEZpbGVyU3RhdEluZm8sIHBhdGg6IHN0cmluZ1tdKTogUHJvbWlzZTxGaWxlVHJlZUZpbGVSZWNvcmRJbnB1dD4ge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gZmlsZTtcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwcm9qZWN0LnJlc29sdmUoLi4ucGF0aCk7XG4gICAgY29uc3QgYmluYXJ5RGF0YSA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGFic29sdXRlUGF0aCk7XG4gICAgY29uc3QgZGF0YSA9IGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJpbmFyeURhdGEpO1xuICAgIHJldHVybiB7IG5hbWUsIGRhdGEgfTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHZpc2l0RGlyZWN0b3J5KFxuICAgIGRpcmVjdG9yeTogRmlsZXJSZWN1cnNpdmVEaXJlY3RvcnlJbmZvLFxuICAgIHBhdGg6IHN0cmluZ1tdLFxuICApOiBQcm9taXNlPEZpbGVUcmVlVHJlZVJlY29yZElucHV0PiB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBkaXJlY3Rvcnk7XG4gICAgY29uc3QgZmlsZVByb21pc2VzOiBQcm9taXNlPEZpbGVUcmVlRmlsZVJlY29yZElucHV0PltdID0gW107XG4gICAgY29uc3QgdHJlZVByb21pc2VzOiBQcm9taXNlPEZpbGVUcmVlVHJlZVJlY29yZElucHV0PltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZGlyZWN0b3J5LmNvbnRlbnRzKSB7XG4gICAgICBjb25zdCBjaGlsZFBhdGggPSBbLi4ucGF0aCwgZmlsZS5uYW1lXTtcbiAgICAgIGlmIChmaWxlLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICAgICAgICB0cmVlUHJvbWlzZXMucHVzaCh2aXNpdERpcmVjdG9yeShmaWxlLCBjaGlsZFBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVQcm9taXNlcy5wdXNoKHZpc2l0RmlsZShmaWxlLCBjaGlsZFBhdGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbZmlsZXMsIHRyZWVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIFByb21pc2UuYWxsKGZpbGVQcm9taXNlcyksXG4gICAgICBQcm9taXNlLmFsbCh0cmVlUHJvbWlzZXMpLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHsgbmFtZSwgdHJlZTogeyBmaWxlcywgdHJlZXMgfSB9O1xuICB9XG5cbiAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICBjb25zdCBmaWxlczogRmlsZXJSZWN1cnNpdmVEaXJlY3RvcnlJbmZvID0gYXdhaXQgcHJvamVjdC5nZXRGaWxlcygpO1xuICAvLyBkaXNjYXJkIHRoZSBuYW1lLCBpdCdzIG5vdCBwYXJ0IG9mIHRoZSBGaWxlVHJlZUlucHV0XG4gIGNvbnN0IHsgdHJlZTogZmlsZVRyZWUgfSA9IGF3YWl0IHZpc2l0RGlyZWN0b3J5KGZpbGVzLCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgaXNQdWJsaWM6IHRydWUsXG4gICAgZmlsZVRyZWUsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNyZWF0ZVJlbW90ZVByb2plY3QoKTogKFByb2plY3QpID0+IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IFtwZXJmb3JtQ3JlYXRlUHJvamVjdCwgX2NyZWF0ZVByb2plY3RSZXNwb25zZV0gPSB1c2VDcmVhdGVQcm9qZWN0TXV0YXRpb24oKTtcblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBhd2FpdCBwcm9qZWN0VG9JbnB1dChwcm9qZWN0KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwZXJmb3JtQ3JlYXRlUHJvamVjdCh7IHZhcmlhYmxlczogeyBwcm9qZWN0SW5wdXQgfSB9KTtcblxuICAgIC8vIHdlJ3JlIG5vdCBwYXNzaW5nIGBpZ25vcmVSZXN1bHRzYCwgc28gdGhlcmUgd2lsbCBiZSBhIHJlc3VsdFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFyZXN1bHQuZGF0YSkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIHJldHVybiByZXN1bHQuZGF0YS5jcmVhdGVQcm9qZWN0O1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVByb2plY3Q7XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVNZXNzYWdlcywgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBTaW1wbGVEaWFsb2cgZnJvbSAnLi4vLi4vbWlzYy9TaW1wbGVEaWFsb2cnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICB0aXRsZToge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5jcmVhdGVfZXhlcmNpc2VfZGlhbG9nLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZvciB0aGUgZXhlcmNpc2UgY3JlYXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NyZWF0ZSBuZXcgZXhlcmNpc2UnLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5jcmVhdGVfZXhlcmNpc2VfZGlhbG9nLmRlc2NyaXB0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RleHQgZm9yIHRoZSBleGVyY2lzZSBjcmVhdGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnRG8geW91IHdhbnQgdG8gdXBsb2FkIHByb2plY3QgXCJ7bmFtZX1cIiBhcyBhbiBleGVyY2lzZT8nLFxuICB9LFxufSk7XG5cbnR5cGUgU2ltcGxlRGlhbG9nUHJvcHMgPSBSZWFjdC5FbGVtZW50UHJvcHM8dHlwZW9mIFNpbXBsZURpYWxvZz47XG5cbi8vIHRoaXMgdHlwZSBoYXMgYWxsIHByb3BlcnRpZXMgdGhhdCBhcmUgZ2VuZXJhdGVkIGJ5IG1vdW50U2ltcGxlRGlhbG9nKClcbnR5cGUgTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzID0gJERpZmY8XG4gIFNpbXBsZURpYWxvZ1Byb3BzLFxuICAvLyB0aGVzZSBhcmUgdGhlIG9uZXMgdGhhdCBhcmVuJ3RcbiAge3xcbiAgICBpZDogJFByb3BlcnR5VHlwZTxTaW1wbGVEaWFsb2dQcm9wcywgJ2lkJz4sXG4gIHx9LFxuPjtcblxudHlwZSBDcmVhdGVSZW1vdGVQcm9qZWN0RGlhbG9nSG9vayA9IHt8XG4gIHNob3cobG9jYWxQcm9qZWN0OiBQcm9qZWN0KTogdm9pZCxcbiAgbW91bnRTaW1wbGVEaWFsb2coKTogTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzLFxufH07XG5cbnR5cGUgQ29uZmlnID0ge3xcbiAgbG9jYWxQcm9qZWN0OiBQcm9qZWN0LFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNyZWF0ZVJlbW90ZVByb2plY3REaWFsb2coXG4gIG9uQ3JlYXRlOiAoUHJvamVjdCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4sXG4pOiBDcmVhdGVSZW1vdGVQcm9qZWN0RGlhbG9nSG9vayB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPENvbmZpZyB8IG51bGw+KG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNob3cobG9jYWxQcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgICBzZXRDb25maWcoeyBsb2NhbFByb2plY3QgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghb3BlbikgdGhyb3cgJ2RpYWxvZyBpcyBub3Qgc2hvd24nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IHsgbG9jYWxQcm9qZWN0IH0gPSBjb25maWc7XG5cbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgb25DcmVhdGUobG9jYWxQcm9qZWN0KTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmFtZSA9IGNvbmZpZz8ubG9jYWxQcm9qZWN0Lm5hbWUgPz8gJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93LFxuICAgIG1vdW50U2ltcGxlRGlhbG9nKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIHRpdGxlOiA8TSB7Li4ubWVzc2FnZXMudGl0bGV9IC8+LFxuICAgICAgICBkZXNjcmlwdGlvbjogPE0gey4uLm1lc3NhZ2VzLmRlc2NyaXB0aW9ufSB2YWx1ZXM9e3sgbmFtZSB9fSAvPixcbiAgICAgICAgYWN0aW9uczogJ09LX0NBTkNFTCcsXG4gICAgICAgIG9uQ2FuY2VsLFxuICAgICAgICBvbkNvbmZpcm0sXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVNZXNzYWdlcywgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBTaW1wbGVEaWFsb2cgZnJvbSAnLi4vLi4vbWlzYy9TaW1wbGVEaWFsb2cnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICB0aXRsZToge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLmRlbGV0ZV9wcm9qZWN0X2RpYWxvZy50aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBmb3IgdGhlIHByb2plY3QgZGVsZXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NvbmZpcm0gZGVsZXRpb24nLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLmRlbGV0ZV9wcm9qZWN0X2RpYWxvZy5kZXNjcmlwdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IGZvciB0aGUgcHJvamVjdCBkZWxldGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBwcm9qZWN0IFwie25hbWV9XCI/JyxcbiAgfSxcbn0pO1xuXG50eXBlIFNpbXBsZURpYWxvZ1Byb3BzID0gUmVhY3QuRWxlbWVudFByb3BzPHR5cGVvZiBTaW1wbGVEaWFsb2c+O1xuXG4vLyB0aGlzIHR5cGUgaGFzIGFsbCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGdlbmVyYXRlZCBieSBtb3VudFNpbXBsZURpYWxvZygpXG50eXBlIE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyA9ICREaWZmPFxuICBTaW1wbGVEaWFsb2dQcm9wcyxcbiAgLy8gdGhlc2UgYXJlIHRoZSBvbmVzIHRoYXQgYXJlbid0XG4gIHt8XG4gICAgaWQ6ICRQcm9wZXJ0eVR5cGU8U2ltcGxlRGlhbG9nUHJvcHMsICdpZCc+LFxuICB8fSxcbj47XG5cbnR5cGUgRGVsZXRlUHJvamVjdERpYWxvZ0hvb2sgPSB7fFxuICBzaG93KHByb2plY3Q6IFByb2plY3QpOiB2b2lkLFxuICBtb3VudFNpbXBsZURpYWxvZygpOiBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMsXG58fTtcblxudHlwZSBDb25maWcgPSB7fFxuICBwcm9qZWN0OiBQcm9qZWN0LFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlbGV0ZVByb2plY3REaWFsb2coXG4gIG9uRGVsZXRlOiAoUHJvamVjdCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4sXG4pOiBEZWxldGVQcm9qZWN0RGlhbG9nSG9vayB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPENvbmZpZyB8IG51bGw+KG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNob3cocHJvamVjdDogUHJvamVjdCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0Q29uZmlnKHsgcHJvamVjdCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Db25maXJtKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFvcGVuKSB0aHJvdyAnZGlhbG9nIGlzIG5vdCBzaG93bic7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoY29uZmlnID09PSBudWxsKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgY29uc3QgeyBwcm9qZWN0IH0gPSBjb25maWc7XG5cbiAgICAvLyB3aGV0aGVyIHRoZSBkZWxldGlvbiBzdWNjZWVkZWQgb3Igbm90LCB3ZSB3YW50IHRvIGhpZGUgdGhlIGRpYWxvZy5cbiAgICAvLyBUaHVzLCBpZ25vcmUgdGhlIHJlc3VsdCBvZiBvbkRlbGV0ZVxuICAgIGF3YWl0IG9uRGVsZXRlKHByb2plY3QpO1xuXG4gICAgLy8gd2UgZG9uJ3Qgc2V0IHRoZSBwcm9qZWN0IHRvIG51bGwgYmVjYXVzZSB0aGF0IHJlc3VsdHMgaW4gYSBkaXNwbGF5IGdsaXRjaDpcbiAgICAvLyB0aGUgaGlkZSBhbmltYXRpb24gd2lsbCBsZWF2ZSB0aGUgcHJvamVjdCBuYW1lIHZpc2libGUgZm9yIGEgc3BsaXQgc2Vjb25kXG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBjb25zdCBuYW1lID0gY29uZmlnPy5wcm9qZWN0Lm5hbWUgPz8gJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93LFxuICAgIG1vdW50U2ltcGxlRGlhbG9nKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIHRpdGxlOiA8TSB7Li4ubWVzc2FnZXMudGl0bGV9IC8+LFxuICAgICAgICBkZXNjcmlwdGlvbjogPE0gey4uLm1lc3NhZ2VzLmRlc2NyaXB0aW9ufSB2YWx1ZXM9e3sgbmFtZSB9fSAvPixcbiAgICAgICAgYWN0aW9uczogJ09LX2F1dG9mb2N1c19DQU5DRUwnLFxuICAgICAgICBvbkNhbmNlbCxcbiAgICAgICAgb25Db25maXJtLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCAqIGFzIGhvb2tzIGZyb20gJy4uLy4uL21pc2MvaG9va3MnO1xuXG5pbXBvcnQgeyB0eXBlIERlbGV0ZVByb2plY3QsIHR5cGUgRGVsZXRlUHJvamVjdFZhcmlhYmxlcyB9IGZyb20gJy4vX19nZW5lcmF0ZWRfXy9EZWxldGVQcm9qZWN0JztcblxuY29uc3QgdXNlRGVsZXRlUHJvamVjdE11dGF0aW9uID0gaG9va3MubWFrZU11dGF0aW9uPERlbGV0ZVByb2plY3QsIERlbGV0ZVByb2plY3RWYXJpYWJsZXM+KGdxbGBcbiAgbXV0YXRpb24gRGVsZXRlUHJvamVjdCgkcHJvamVjdElkOiBJRCEpIHtcbiAgICBkZWxldGVQcm9qZWN0QnlJZChwcm9qZWN0SWQ6ICRwcm9qZWN0SWQpXG4gIH1cbmApO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEZWxldGVSZW1vdGVQcm9qZWN0KCk6IChzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBjb25zdCBbcGVyZm9ybURlbGV0ZVByb2plY3QsIF9kZWxldGVQcm9qZWN0UmVzcG9uc2VdID0gdXNlRGVsZXRlUHJvamVjdE11dGF0aW9uKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBlcmZvcm1EZWxldGVQcm9qZWN0KHsgdmFyaWFibGVzOiB7IHByb2plY3RJZCB9IH0pO1xuXG4gICAgLy8gd2UncmUgbm90IHBhc3NpbmcgYGlnbm9yZVJlc3VsdHNgLCBzbyB0aGVyZSB3aWxsIGJlIGEgcmVzdWx0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIXJlc3VsdC5kYXRhKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhLmRlbGV0ZVByb2plY3RCeUlkID8/IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVsZXRlUHJvamVjdDtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IFNpbXBsZURpYWxvZyBmcm9tICcuLi8uLi9taXNjL1NpbXBsZURpYWxvZyc7XG5cbmltcG9ydCB7IHR5cGUgUmVtb3RlUHJvamVjdCB9IGZyb20gJy4vdXNlUHJvamVjdEluZGV4JztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIHRpdGxlOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmRlbGV0ZV9leGVyY2lzZV9kaWFsb2cudGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgZm9yIHRoZSBleGVyY2lzZSBkZWxldGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ29uZmlybSBkZWxldGlvbicsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmRlbGV0ZV9leGVyY2lzZV9kaWFsb2cuZGVzY3JpcHRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBmb3IgdGhlIGV4ZXJjaXNlIGRlbGV0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGV4ZXJjaXNlIFwie25hbWV9XCI/JyxcbiAgfSxcbn0pO1xuXG50eXBlIFNpbXBsZURpYWxvZ1Byb3BzID0gUmVhY3QuRWxlbWVudFByb3BzPHR5cGVvZiBTaW1wbGVEaWFsb2c+O1xuXG4vLyB0aGlzIHR5cGUgaGFzIGFsbCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGdlbmVyYXRlZCBieSBtb3VudFNpbXBsZURpYWxvZygpXG50eXBlIE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyA9ICREaWZmPFxuICBTaW1wbGVEaWFsb2dQcm9wcyxcbiAgLy8gdGhlc2UgYXJlIHRoZSBvbmVzIHRoYXQgYXJlbid0XG4gIHt8XG4gICAgaWQ6ICRQcm9wZXJ0eVR5cGU8U2ltcGxlRGlhbG9nUHJvcHMsICdpZCc+LFxuICB8fSxcbj47XG5cbnR5cGUgRGVsZXRlUmVtb3RlUHJvamVjdERpYWxvZ0hvb2sgPSB7fFxuICBzaG93KHByb2plY3Q6IFJlbW90ZVByb2plY3QpOiB2b2lkLFxuICBtb3VudFNpbXBsZURpYWxvZygpOiBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMsXG58fTtcblxudHlwZSBDb25maWcgPSB7fFxuICBwcm9qZWN0OiBSZW1vdGVQcm9qZWN0LFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlbGV0ZVJlbW90ZVByb2plY3REaWFsb2coXG4gIG9uRGVsZXRlOiAoUmVtb3RlUHJvamVjdCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4sXG4pOiBEZWxldGVSZW1vdGVQcm9qZWN0RGlhbG9nSG9vayB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPENvbmZpZyB8IG51bGw+KG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNob3cocHJvamVjdDogUmVtb3RlUHJvamVjdCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0Q29uZmlnKHsgcHJvamVjdCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Db25maXJtKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFvcGVuKSB0aHJvdyAnZGlhbG9nIGlzIG5vdCBzaG93bic7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoY29uZmlnID09PSBudWxsKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgY29uc3QgeyBwcm9qZWN0IH0gPSBjb25maWc7XG5cbiAgICAvLyB3aGV0aGVyIHRoZSBkZWxldGlvbiBzdWNjZWVkZWQgb3Igbm90LCB3ZSB3YW50IHRvIGhpZGUgdGhlIGRpYWxvZy5cbiAgICAvLyBUaHVzLCBpZ25vcmUgdGhlIHJlc3VsdCBvZiBvbkRlbGV0ZVxuICAgIGF3YWl0IG9uRGVsZXRlKHByb2plY3QpO1xuXG4gICAgLy8gd2UgZG9uJ3Qgc2V0IHRoZSBwcm9qZWN0IHRvIG51bGwgYmVjYXVzZSB0aGF0IHJlc3VsdHMgaW4gYSBkaXNwbGF5IGdsaXRjaDpcbiAgICAvLyB0aGUgaGlkZSBhbmltYXRpb24gd2lsbCBsZWF2ZSB0aGUgcHJvamVjdCBuYW1lIHZpc2libGUgZm9yIGEgc3BsaXQgc2Vjb25kXG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBjb25zdCBuYW1lID0gY29uZmlnPy5wcm9qZWN0Lm5hbWUgPz8gJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93LFxuICAgIG1vdW50U2ltcGxlRGlhbG9nKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIHRpdGxlOiA8TSB7Li4ubWVzc2FnZXMudGl0bGV9IC8+LFxuICAgICAgICBkZXNjcmlwdGlvbjogPE0gey4uLm1lc3NhZ2VzLmRlc2NyaXB0aW9ufSB2YWx1ZXM9e3sgbmFtZSB9fSAvPixcbiAgICAgICAgYWN0aW9uczogJ09LX2F1dG9mb2N1c19DQU5DRUwnLFxuICAgICAgICBvbkNhbmNlbCxcbiAgICAgICAgb25Db25maXJtLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgYmFzZTY0IGZyb20gJ2Jhc2U2NC1qcyc7XG5pbXBvcnQgZmlsZXIsIHsgZnMgfSBmcm9tICdmaWxlcic7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0ICogYXMgaG9va3MgZnJvbSAnLi4vLi4vbWlzYy9ob29rcyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuaW1wb3J0IHtcbiAgdHlwZSBSZW1vdGVQcm9qZWN0Q29udGVudCxcbiAgdHlwZSBSZW1vdGVQcm9qZWN0Q29udGVudFZhcmlhYmxlcyxcbiAgdHlwZSBSZW1vdGVQcm9qZWN0Q29udGVudF9wcm9qZWN0QnlJZCBhcyBSZW1vdGVQcm9qZWN0Q29udGVudHMsXG4gIHR5cGUgUmVtb3RlUHJvamVjdENvbnRlbnRfcHJvamVjdEJ5SWRfZmlsZVRyZWVzX2NvbnRlbnRzIGFzIEZpbGVUcmVlLFxufSBmcm9tICcuL19fZ2VuZXJhdGVkX18vUmVtb3RlUHJvamVjdENvbnRlbnQnO1xuXG5leHBvcnQgdHlwZSB7IFJlbW90ZVByb2plY3RDb250ZW50cyB9O1xuXG5jb25zdCB1c2VSZW1vdGVQcm9qZWN0Q29udGVudFF1ZXJ5ID0gaG9va3MubWFrZUxhenlRdWVyeTxcbiAgUmVtb3RlUHJvamVjdENvbnRlbnQsXG4gIFJlbW90ZVByb2plY3RDb250ZW50VmFyaWFibGVzLFxuPihncWxgXG4gIHF1ZXJ5IFJlbW90ZVByb2plY3RDb250ZW50KCRwcm9qZWN0SWQ6IElEISkge1xuICAgIHByb2plY3RCeUlkKGlkOiAkcHJvamVjdElkKSB7XG4gICAgICBpZFxuICAgICAgZmlsZVRyZWVSb290SWRcbiAgICAgIGZpbGVUcmVlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGNvbnRlbnRzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgdHlwZVxuICAgICAgICAgIGl0ZW1JZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaWxlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGRhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbmApO1xuXG4vKipcbiAqIFNhdmVzIGFsbCByZW1vdGUgcHJvamVjdCBjb250ZW50cyBpbiB0aGUgZ2l2ZW4gbG9jYWwgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0LCBjb250ZW50czogUmVtb3RlUHJvamVjdENvbnRlbnRzKSB7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IGZpbGVUcmVlcyA9IE9iamVjdC5mcm9tRW50cmllcyhjb250ZW50cy5maWxlVHJlZXMubWFwKCh7IGlkLCBjb250ZW50cyB9KSA9PiBbaWQsIGNvbnRlbnRzXSkpO1xuICBjb25zdCBmaWxlcyA9IE9iamVjdC5mcm9tRW50cmllcyhjb250ZW50cy5maWxlcy5tYXAoKHsgaWQsIGRhdGEgfSkgPT4gW2lkLCBkYXRhXSkpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHZpc2l0Q2hpbGRyZW4oZmlsZVRyZWU6IEZpbGVUcmVlW10sIHBhdGg6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgZmlsZVRyZWUubWFwKGFzeW5jICh7IG5hbWUsIHR5cGUsIGl0ZW1JZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHByb2plY3QucmVzb2x2ZSguLi5wYXRoLCBuYW1lKTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnRklMRSc6IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBmaWxlci5CdWZmZXIuZnJvbShiYXNlNjQudG9CeXRlQXJyYXkoZmlsZXNbaXRlbUlkXSkpO1xuICAgICAgICAgICAgYXdhaXQgZnMucHJvbWlzZXMud3JpdGVGaWxlKGFic29sdXRlUGF0aCwgZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnVFJFRSc6IHtcbiAgICAgICAgICAgIGF3YWl0IGZzLnByb21pc2VzLm1rZGlyKGFic29sdXRlUGF0aCk7XG4gICAgICAgICAgICBhd2FpdCB2aXNpdENoaWxkcmVuKGZpbGVUcmVlc1tpdGVtSWRdLCBbLi4ucGF0aCwgbmFtZV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgICAgICAgICAgdGhyb3cgJ3VucmVhY2hhYmxlJztcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGF3YWl0IHZpc2l0Q2hpbGRyZW4oZmlsZVRyZWVzW2NvbnRlbnRzLmZpbGVUcmVlUm9vdElkXSwgW10pO1xufVxuXG4vKipcbiAqIFF1ZXJ5IHRvIGdldCB0aGUgY29udGVudHMgb2YgYSBnaXZlbiByZW1vdGUgcHJvamVjdCBpZGVudGlmaWVkIGJ5IGl0cyBwcm9qZWN0SWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByb2plY3RDb250ZW50UXVlcnkoKTogKFxuICBwcm9qZWN0SWQ6IHN0cmluZyxcbikgPT4gUHJvbWlzZTxSZW1vdGVQcm9qZWN0Q29udGVudHM+IHtcbiAgLy8gdGhpcyBjb25zdHJ1Y3Rpb24gaXMgdG8gZ2V0IGEgcmVzdWx0IG91dCBvZiB1c2VMYXp5UXVlcnkgYXMgYSBwcm9taXNlOlxuICAvLyB3ZSBhc3N1bWUgdGhlcmUgYXJlIG5vIGNvbmN1cnJlbnQgcmVxdWVzdHNcbiAgLy8gQXQgc29tZSBwb2ludCwgdGhlcmUgd2lsbCBiZSBkYXRhIGZvciB0aGUgbGF0ZXN0IHJlcXVlc3QuIFdoZW4gdGhpcyBoYXBwZW5zLCB3ZSBoYXZlIGFscmVhZHlcbiAgLy8gc2F2ZWQgYSByZXNvbHZlIGNhbGxiYWNrLCBzbyBpbiBhbiBlZmZlY3QsIHdlIGludm9rZSB0aGF0IGNhbGxiYWNrIHdpdGggdGhlIGxhdGVzdCByZXN1bHQuXG5cbiAgY29uc3QgW2V4ZWN1dGVRdWVyeSwgcHJvamVjdENvbnRlbnRSZXNwb25zZV0gPSB1c2VSZW1vdGVQcm9qZWN0Q29udGVudFF1ZXJ5KCk7XG4gIGNvbnN0IHJlc29sdmVSZWYgPSBSZWFjdC51c2VSZWY8e3xcbiAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICByZXNvbHZlOiAoUmVtb3RlUHJvamVjdENvbnRlbnRzKSA9PiB2b2lkLFxuICAgIHJlamVjdDogKEVycm9yKSA9PiB2b2lkLFxuICB8fSB8IG51bGw+KG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyB2YXJpYWJsZXMsIGRhdGEsIGVycm9yIH0gPSBwcm9qZWN0Q29udGVudFJlc3BvbnNlO1xuICAgIGlmICghZGF0YSAmJiAhZXJyb3IpIHJldHVybjtcblxuICAgIC8vIHdlIGFzc3VtZSB0aGVyZSBhcmUgbm8gY29uY3VycmVudCByZXF1ZXN0c1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKHJlc29sdmVSZWYuY3VycmVudCA9PT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IHsgcHJvamVjdElkLCByZXNvbHZlLCByZWplY3QgfSA9IHJlc29sdmVSZWYuY3VycmVudDtcbiAgICByZXNvbHZlUmVmLmN1cnJlbnQgPSBudWxsO1xuXG4gICAgLy8gd2UgYXNzdW1lIHRoZXJlIGFyZSBubyBjb25jdXJyZW50IHJlcXVlc3RzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAodmFyaWFibGVzLnByb2plY3RJZCAhPT0gcHJvamVjdElkKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgaWYgKGRhdGEpIHJlc29sdmUoZGF0YS5wcm9qZWN0QnlJZCk7XG4gICAgZWxzZSBpZiAoZXJyb3IpIHJlamVjdChlcnJvcik7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBlbHNlIHRocm93ICd1bnJlYWNoYWJsZSc7XG4gIH0sIFtwcm9qZWN0Q29udGVudFJlc3BvbnNlXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFByb2plY3RDb250ZW50KHByb2plY3RJZDogc3RyaW5nKSB7XG4gICAgLy8gd2UgYXNzdW1lIHRoZXJlIGFyZSBubyBjb25jdXJyZW50IHJlcXVlc3RzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAocmVzb2x2ZVJlZi5jdXJyZW50ICE9PSBudWxsKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmVSZWYuY3VycmVudCA9IHsgcHJvamVjdElkLCByZXNvbHZlLCByZWplY3QgfTtcbiAgICAgIGV4ZWN1dGVRdWVyeSh7IHZhcmlhYmxlczogeyBwcm9qZWN0SWQgfSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsb2FkUHJvamVjdENvbnRlbnQ7XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgKiBhcyBob29rcyBmcm9tICcuLi8uLi9taXNjL2hvb2tzJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5pbXBvcnQge1xuICB0eXBlIFJlbW90ZVByb2plY3RzLFxuICB0eXBlIFJlbW90ZVByb2plY3RzX3Byb2plY3RzIGFzIFJlbW90ZVByb2plY3QsXG59IGZyb20gJy4vX19nZW5lcmF0ZWRfXy9SZW1vdGVQcm9qZWN0cyc7XG5cbmV4cG9ydCB0eXBlIHsgUmVtb3RlUHJvamVjdCB9O1xuXG5jb25zdCB1c2VSZW1vdGVQcm9qZWN0c1F1ZXJ5ID0gaG9va3MubWFrZVF1ZXJ5PFJlbW90ZVByb2plY3RzLCB2b2lkPihncWxgXG4gIHF1ZXJ5IFJlbW90ZVByb2plY3RzIHtcbiAgICBwcm9qZWN0cyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuYCk7XG5cbnR5cGUgTG9jYWxUb1JlbW90ZUlkTWFwID0ge3wgW3Byb2plY3RVaWQ6IHN0cmluZ106IHN0cmluZyB8fTtcbmNvbnN0IHVzZUxvY2FsVG9SZW1vdGVJZE1hcCA9IGhvb2tzLm1ha2VMb2NhbFN0b3JhZ2U8TG9jYWxUb1JlbW90ZUlkTWFwPihcbiAgKGpzb24pID0+ICh7IC4uLihqc29uICE9PSBudWxsID8gSlNPTi5wYXJzZShqc29uKSA6IG51bGwpIH0pLFxuICAoc3RhdGUpID0+IEpTT04uc3RyaW5naWZ5KHN0YXRlKSxcbik7XG5cbi8qKlxuICogQSBjdXJyaWVkIGZ1bmN0aW9uIHJlbW90ZVByb2plY3RzID0+IG9sZE1hcCA9PiBuZXdNYXAgdGhhdCBmaWx0ZXJzIG91dCB0aG9zZSBtYXAgZW50cmllc1xuICogdGhhdCBkbyBub3QgcmVmZXIgdG8gYW4gZXhpc3RlbnQgcmVtb3RlIHByb2plY3QuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZU5vbmV4aXN0ZW50TWFwRW50cmllcyhyZW1vdGVQcm9qZWN0czogUmVtb3RlUHJvamVjdFtdKSB7XG4gIHJldHVybiAob2xkTWFwOiBMb2NhbFRvUmVtb3RlSWRNYXApID0+IHtcbiAgICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gICAgY29uc3Qgb2xkRW50cmllczogW3N0cmluZywgc3RyaW5nXVtdID0gT2JqZWN0LmVudHJpZXMob2xkTWFwKTtcbiAgICBjb25zdCBuZXdFbnRyaWVzID0gb2xkRW50cmllcy5mbGF0TWFwKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgW19wcm9qZWN0VWlkLCByZW1vdGVJZF0gPSBlbnRyeTtcblxuICAgICAgLy8gc2tpcCBhbnkgZW50cmllcyB0aGF0IHJlZmVyIHRvIG5vbmV4aXN0ZW50IHJlbW90ZSBwcm9qZWN0c1xuICAgICAgaWYgKHJlbW90ZVByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcmVtb3RlSWQpID09PSAtMSkgcmV0dXJuIFtdO1xuXG4gICAgICByZXR1cm4gW2VudHJ5XTtcbiAgICB9KTtcblxuICAgIGlmIChvbGRFbnRyaWVzLmxlbmd0aCA9PT0gbmV3RW50cmllcy5sZW5ndGgpIHJldHVybiBvbGRNYXA7XG5cbiAgICBjb25zdCBuZXdNYXA6IExvY2FsVG9SZW1vdGVJZE1hcCA9IE9iamVjdC5mcm9tRW50cmllcyhuZXdFbnRyaWVzKTtcbiAgICByZXR1cm4gbmV3TWFwO1xuICB9O1xufVxuXG50eXBlIExvY2FsVG9SZW1vdGVNYXAgPSB7fCBbcHJvamVjdFVpZDogc3RyaW5nXTogUmVtb3RlUHJvamVjdCB8fTtcbnR5cGUgUmVtb3RlVG9Mb2NhbE1hcCA9IHt8IFtyZW1vdGVJZDogc3RyaW5nXTogUHJvamVjdFtdIHx9O1xudHlwZSBQcm9qZWN0SW5kZXggPSB7fFxuICBsb2NhbFByb2plY3RzOiBQcm9qZWN0W10sXG4gIHJlbW90ZVByb2plY3RzOiBSZW1vdGVQcm9qZWN0W10sXG4gIC8vIG1hcHMgbG9jYWwgcHJvamVjdFVpZHMgb250byByZW1vdGUgcHJvamVjdHNcbiAgbG9jYWxUb1JlbW90ZU1hcDogTG9jYWxUb1JlbW90ZU1hcCxcbiAgLy8gbWFwcyByZW1vdGUgcHJvamVjdCBJRHMgb250byBhIGxpc3Qgb2YgbG9jYWwgcHJvamVjdHNcbiAgcmVtb3RlVG9Mb2NhbE1hcDogUmVtb3RlVG9Mb2NhbE1hcCxcbnx9O1xuXG50eXBlIFByb2plY3RJbmRleEFjdGlvbiA9XG4gIHwge3wgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIHx9XG4gIHwge3wgdHlwZTogJ1JFRlJFU0hfUkVNT1RFJyB8fVxuICB8IHt8IHR5cGU6ICdBRERfTUFQUElORycsIHByb2plY3RVaWQ6IHN0cmluZywgcmVtb3RlSWQ6IHN0cmluZyB8fVxuICB8IHt8IHR5cGU6ICdSRU1PVkVfTUFQUElORycsIHByb2plY3RVaWQ6IHN0cmluZyB8fTtcblxuLyoqXG4gKiBUaGUgcHJvamVjdCBpbmRleCBwcm92aWRlcyBhbGwgbG9jYWwgYW5kIHJlbW90ZSBwcm9qZWN0cyBhY2Nlc3NpYmxlIHRvIHRoZSBJREUsXG4gKiBhcyB3ZWxsIGFzIG1hcHBpbmdzIGJldHdlZW4gdGhvc2UuXG4gKiBBIGxvY2FsIChzdG9yZWQgaW4gdGhlIGJyb3dzZXIpIHByb2plY3QgY2FuIGJlIGVkaXRlZCxcbiAqIGFuZCBzdWNoIGEgcHJvamVjdCBjYW4gYmUgYXNzb2NpYXRlZCB3aXRoIHplcm8gb3Igb25lIHJlbW90ZSBwcm9qZWN0LlxuICogTXVsdGlwbGUgbG9jYWwgcHJvamVjdHMgY2FuIHJlZmVyIHRvIHRoZSBzYW1lIHJlbW90ZSBwcm9qZWN0LFxuICogc3VjaCBhcyB3aGVuIGF0dGVtcHRpbmcgYW4gZXhlcmNpc2UgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogVGhpcyBob29rIGFsbG93cyBhbGwgcmVsZXZhbnQgcHJvamVjdCBsaXN0cyBhbmQgbWFwcGluZ3MsXG4gKiBhbGxvd3MgcmVmcmVzaGluZyB0aGVzZSBsaXN0cyBhbmQgZWRpdGluZyB0aGUgbWFwcGluZ3MsXG4gKiBhbmQgcmVtb3ZlcyBzdGFsZSBtYXBwaW5ncyBpbiB0aGUgbGlnaHQgb2YgY2hhbmdlcyB0byByZW1vdGUgcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByb2plY3RJbmRleCgpOiBbUHJvamVjdEluZGV4LCAoUHJvamVjdEluZGV4QWN0aW9uKSA9PiB2b2lkXSB7XG4gIGNvbnN0IFtsb2NhbFRvUmVtb3RlSWRNYXAsIHNldExvY2FsVG9SZW1vdGVJZE1hcF0gPSB1c2VMb2NhbFRvUmVtb3RlSWRNYXAoJ1Byb2plY3QtSW5kZXgnKTtcbiAgY29uc3QgcmVtb3RlUHJvamVjdHNRdWVyeSA9IHVzZVJlbW90ZVByb2plY3RzUXVlcnkoKTtcbiAgY29uc3QgW2xvY2FsUHJvamVjdHMsIHNldExvY2FsUHJvamVjdHNdID0gaG9va3MudXNlQXN5bmNTdGF0ZTxQcm9qZWN0W10+KFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiByZWZyZXNoUmVtb3RlUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtb3RlUHJvamVjdHNRdWVyeS5yZWZldGNoKCk7XG4gICAgY29uc3QgcmVtb3RlUHJvamVjdHMgPSByZXN1bHQuZGF0YT8ucHJvamVjdHMgPz8gW107XG4gICAgc2V0TG9jYWxUb1JlbW90ZUlkTWFwKHJlbW92ZU5vbmV4aXN0ZW50TWFwRW50cmllcyhyZW1vdGVQcm9qZWN0cykpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmcmVzaExvY2FsUHJvamVjdHMoKSB7XG4gICAgc2V0TG9jYWxQcm9qZWN0cyhQcm9qZWN0LmdldFByb2plY3RzKCkpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWZyZXNoTG9jYWxQcm9qZWN0cygpO1xuICB9LCBbXSk7XG5cbiAgLy8gY2FsbCByZW1vdmVOb25leGlzdGVudE1hcEVudHJpZXMgb25jZSBhZnRlciByZW1vdGUgcHJvamVjdHMgaGF2ZSBpbml0aWFsbHkgbG9hZGVkXG4gIGNvbnN0IGluaXRpYWxMb2FkUmVmID0gUmVhY3QudXNlUmVmPGJvb2xlYW4+KHRydWUpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaW5pdGlhbExvYWRSZWYuY3VycmVudCB8fCAhcmVtb3RlUHJvamVjdHNRdWVyeS5kYXRhKSByZXR1cm47XG4gICAgaW5pdGlhbExvYWRSZWYuY3VycmVudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVtb3RlUHJvamVjdHMgPSByZW1vdGVQcm9qZWN0c1F1ZXJ5LmRhdGEucHJvamVjdHM7XG4gICAgc2V0TG9jYWxUb1JlbW90ZUlkTWFwKHJlbW92ZU5vbmV4aXN0ZW50TWFwRW50cmllcyhyZW1vdGVQcm9qZWN0cykpO1xuICB9LCBbcmVtb3RlUHJvamVjdHNRdWVyeS5kYXRhXSk7XG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uOiBQcm9qZWN0SW5kZXhBY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdSRUZSRVNIX0xPQ0FMJzoge1xuICAgICAgICByZWZyZXNoTG9jYWxQcm9qZWN0cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYXNlICdSRUZSRVNIX1JFTU9URSc6IHtcbiAgICAgICAgcmVmcmVzaFJlbW90ZVByb2plY3RzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0FERF9NQVBQSU5HJzoge1xuICAgICAgICBjb25zdCB7IHByb2plY3RVaWQsIHJlbW90ZUlkIH0gPSBhY3Rpb247XG4gICAgICAgIHNldExvY2FsVG9SZW1vdGVJZE1hcCgob2xkTWFwKSA9PiAoe1xuICAgICAgICAgIC4uLm9sZE1hcCxcbiAgICAgICAgICBbcHJvamVjdFVpZF06IHJlbW90ZUlkLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ1JFTU9WRV9NQVBQSU5HJzoge1xuICAgICAgICBjb25zdCB7IHByb2plY3RVaWQgfSA9IGFjdGlvbjtcbiAgICAgICAgc2V0TG9jYWxUb1JlbW90ZUlkTWFwKCh7IFtwcm9qZWN0VWlkXTogXywgLi4ubmV3TWFwIH0pID0+IG5ld01hcCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgICAgIHRocm93ICd1bnJlYWNoYWJsZSc7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3RlUHJvamVjdHMgPSByZW1vdGVQcm9qZWN0c1F1ZXJ5LmRhdGE/LnByb2plY3RzID8/IFtdO1xuICBjb25zdCBsb2NhbFRvUmVtb3RlTWFwOiBMb2NhbFRvUmVtb3RlTWFwID0ge307XG4gIGNvbnN0IHJlbW90ZVRvTG9jYWxNYXA6IFJlbW90ZVRvTG9jYWxNYXAgPSB7fTtcblxuICBmb3IgKGNvbnN0IFtwcm9qZWN0VWlkLCByZW1vdGVJZDBdIG9mIE9iamVjdC5lbnRyaWVzKGxvY2FsVG9SZW1vdGVJZE1hcCkpIHtcbiAgICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gICAgY29uc3QgcmVtb3RlSWQ6IHN0cmluZyA9IHJlbW90ZUlkMDtcblxuICAgIGNvbnN0IGxvY2FsUHJvamVjdCA9IGxvY2FsUHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC51aWQgPT09IHByb2plY3RVaWQpO1xuICAgIGNvbnN0IHJlbW90ZVByb2plY3QgPSByZW1vdGVQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSByZW1vdGVJZCk7XG4gICAgaWYgKGxvY2FsUHJvamVjdCAhPT0gdW5kZWZpbmVkICYmIHJlbW90ZVByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxUb1JlbW90ZU1hcFtwcm9qZWN0VWlkXSA9IHJlbW90ZVByb2plY3Q7XG4gICAgICBpZiAoIShyZW1vdGVJZCBpbiByZW1vdGVUb0xvY2FsTWFwKSkgcmVtb3RlVG9Mb2NhbE1hcFtyZW1vdGVJZF0gPSBbXTtcbiAgICAgIHJlbW90ZVRvTG9jYWxNYXBbcmVtb3RlSWRdLnB1c2gobG9jYWxQcm9qZWN0KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBsb2NhbFByb2plY3RzLFxuICAgIHJlbW90ZVByb2plY3RzLFxuICAgIGxvY2FsVG9SZW1vdGVNYXAsXG4gICAgcmVtb3RlVG9Mb2NhbE1hcCxcbiAgfTtcblxuICByZXR1cm4gW3N0YXRlLCBkaXNwYXRjaF07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVNZXNzYWdlcywgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcblxuaW1wb3J0IFNpbXBsZURpYWxvZyBmcm9tICcuLi8uLi9taXNjL1NpbXBsZURpYWxvZyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIHRpdGxlOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMucmVuYW1lX3Byb2plY3RfZGlhbG9nLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZvciB0aGUgcHJvamVjdCByZW5hbWUgZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1JlbmFtZSBwcm9qZWN0JyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5yZW5hbWVfcHJvamVjdF9kaWFsb2cuZGVzY3JpcHRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBmb3IgdGhlIHByb2plY3QgcmVuYW1lIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIHRoZSBwcm9qZWN0J3MgbmV3IG5hbWUuXCIsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMucmVuYW1lX3Byb2plY3RfZGlhbG9nLm5ld19uYW1lX2xhYmVsJyxcbiAgICBkZXNjcmlwdGlvbjogXCJMYWJlbCBmb3IgdGhlIHByb2plY3QgY3JlYXRpb24gZGlhbG9nJ3MgdGV4dCBmaWVsZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUHJvamVjdCBOYW1lJyxcbiAgfSxcbn0pO1xuXG50eXBlIFNpbXBsZURpYWxvZ1Byb3BzID0gUmVhY3QuRWxlbWVudFByb3BzPHR5cGVvZiBTaW1wbGVEaWFsb2c+O1xuXG4vLyB0aGlzIHR5cGUgaGFzIGFsbCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGdlbmVyYXRlZCBieSBtb3VudFNpbXBsZURpYWxvZygpXG50eXBlIE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyA9ICREaWZmPFxuICBTaW1wbGVEaWFsb2dQcm9wcyxcbiAgLy8gdGhlc2UgYXJlIHRoZSBvbmVzIHRoYXQgYXJlbid0XG4gIHt8XG4gICAgaWQ6ICRQcm9wZXJ0eVR5cGU8U2ltcGxlRGlhbG9nUHJvcHMsICdpZCc+LFxuICB8fSxcbj47XG5cbnR5cGUgUmVuYW1lUHJvamVjdERpYWxvZ0hvb2sgPSB7fFxuICBzaG93KHByb2plY3Q6IFByb2plY3QpOiB2b2lkLFxuICBtb3VudFNpbXBsZURpYWxvZygpOiBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMsXG58fTtcblxudHlwZSBDb25maWcgPSB7fFxuICBwcm9qZWN0OiBQcm9qZWN0LFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlbmFtZVByb2plY3REaWFsb2coXG4gIG9uUmVuYW1lOiAoUHJvamVjdCwgc3RyaW5nKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPixcbiAgYWxsUHJvamVjdHM6IFByb2plY3RbXSxcbik6IFJlbmFtZVByb2plY3REaWFsb2dIb29rIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8Q29uZmlnIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtuZXdQcm9qZWN0TmFtZSwgc2V0TmV3UHJvamVjdE5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgZnVuY3Rpb24gc2hvdyhwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgICBzZXRDb25maWcoeyBwcm9qZWN0IH0pO1xuICAgIHNldE5ld1Byb2plY3ROYW1lKHByb2plY3QubmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lQ2xlYW4gPSBuYW1lLnJlcGxhY2UoL1teLVxcdyMkJSgpLiw6OyBdL2csICcnKTtcbiAgICBzZXROZXdQcm9qZWN0TmFtZShuYW1lQ2xlYW4pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Db25maXJtKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFvcGVuKSB0aHJvdyAnZGlhbG9nIGlzIG5vdCBzaG93bic7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoY29uZmlnID09PSBudWxsKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgY29uc3QgeyBwcm9qZWN0IH0gPSBjb25maWc7XG5cbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgb25SZW5hbWUocHJvamVjdCwgbmV3UHJvamVjdE5hbWUpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YWxpZCA9XG4gICAgbmV3UHJvamVjdE5hbWUgIT09ICcnICYmIGFsbFByb2plY3RzLmV2ZXJ5KChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgIT09IG5ld1Byb2plY3ROYW1lKTtcblxuICByZXR1cm4ge1xuICAgIHNob3csXG4gICAgbW91bnRTaW1wbGVEaWFsb2coKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGVuLFxuICAgICAgICB2YWxpZCxcbiAgICAgICAgdGl0bGU6IDxNIHsuLi5tZXNzYWdlcy50aXRsZX0gLz4sXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8TSB7Li4ubWVzc2FnZXMuZGVzY3JpcHRpb259IC8+LFxuICAgICAgICBhY3Rpb25zOiAnT0tfQ0FOQ0VMJyxcbiAgICAgICAgb25DYW5jZWwsXG4gICAgICAgIG9uQ29uZmlybSxcbiAgICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBsYWJlbD17PE0gey4uLm1lc3NhZ2VzLmxhYmVsfSAvPn1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQcm9qZWN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGVycm9yPXshdmFsaWR9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAvPlxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgU2ltcGxlRGlhbG9nIGZyb20gJy4uLy4uL21pc2MvU2ltcGxlRGlhbG9nJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgdGl0bGU6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuY3JlYXRlX2V4ZXJjaXNlX2RpYWxvZy50aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBmb3IgdGhlIGV4ZXJjaXNlIGNyZWF0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgbmV3IGV4ZXJjaXNlJyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuY3JlYXRlX2V4ZXJjaXNlX2RpYWxvZy5kZXNjcmlwdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IGZvciB0aGUgZXhlcmNpc2UgY3JlYXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0RvIHlvdSB3YW50IHRvIHVwbG9hZCBwcm9qZWN0IFwie25hbWV9XCIgYXMgYW4gZXhlcmNpc2U/JyxcbiAgfSxcbn0pO1xuXG50eXBlIFNpbXBsZURpYWxvZ1Byb3BzID0gUmVhY3QuRWxlbWVudFByb3BzPHR5cGVvZiBTaW1wbGVEaWFsb2c+O1xuXG4vLyB0aGlzIHR5cGUgaGFzIGFsbCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGdlbmVyYXRlZCBieSBtb3VudFNpbXBsZURpYWxvZygpXG50eXBlIE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyA9ICREaWZmPFxuICBTaW1wbGVEaWFsb2dQcm9wcyxcbiAgLy8gdGhlc2UgYXJlIHRoZSBvbmVzIHRoYXQgYXJlbid0XG4gIHt8XG4gICAgaWQ6ICRQcm9wZXJ0eVR5cGU8U2ltcGxlRGlhbG9nUHJvcHMsICdpZCc+LFxuICB8fSxcbj47XG5cbnR5cGUgU2hhcmVQcm9qZWN0RGlhbG9nSG9vayA9IHt8XG4gIHNob3cobG9jYWxQcm9qZWN0OiBQcm9qZWN0KTogdm9pZCxcbiAgbW91bnRTaW1wbGVEaWFsb2coKTogTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzLFxufH07XG5cbnR5cGUgQ29uZmlnID0ge3xcbiAgbG9jYWxQcm9qZWN0OiBQcm9qZWN0LFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNoYXJlUHJvamVjdERpYWxvZyhcbiAgb25DcmVhdGU6IChQcm9qZWN0KSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPixcbik6IFNoYXJlUHJvamVjdERpYWxvZ0hvb2sge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxDb25maWcgfCBudWxsPihudWxsKTtcblxuICBmdW5jdGlvbiBzaG93KGxvY2FsUHJvamVjdDogUHJvamVjdCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0Q29uZmlnKHsgbG9jYWxQcm9qZWN0IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIW9wZW4pIHRocm93ICdkaWFsb2cgaXMgbm90IHNob3duJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmIChjb25maWcgPT09IG51bGwpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBjb25zdCB7IGxvY2FsUHJvamVjdCB9ID0gY29uZmlnO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IG9uQ3JlYXRlKGxvY2FsUHJvamVjdCk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBjb25maWc/LmxvY2FsUHJvamVjdC5uYW1lID8/ICcnO1xuXG4gIHJldHVybiB7XG4gICAgc2hvdyxcbiAgICBtb3VudFNpbXBsZURpYWxvZygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW4sXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICB0aXRsZTogPE0gey4uLm1lc3NhZ2VzLnRpdGxlfSAvPixcbiAgICAgICAgZGVzY3JpcHRpb246IDxNIHsuLi5tZXNzYWdlcy5kZXNjcmlwdGlvbn0gdmFsdWVzPXt7IG5hbWUgfX0gLz4sXG4gICAgICAgIGFjdGlvbnM6ICdPS19DQU5DRUwnLFxuICAgICAgICBvbkNhbmNlbCxcbiAgICAgICAgb25Db25maXJtLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IGZpbGVyLCB7IGZzIH0gZnJvbSAnZmlsZXInO1xuXG5jb25zdCBzaCA9IG5ldyBmcy5TaGVsbCgpO1xuXG4vLyBmb3IgdGhlIElERSByZWxldmFudCBmaWVsZHMgb2YgZnMuc3RhdCgpIHJlc3VsdHNcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZXJTdGF0SW5mbyB7XG4gICtub2RlOiBzdHJpbmc7IC8vIGludGVybmFsIG5vZGUgaWQgKHVuaXF1ZSlcbiAgLy8gZGV2OiBzdHJpbmc7IC8vIGZpbGUgc3lzdGVtIG5hbWVcbiAgK25hbWU6IHN0cmluZzsgLy8gdGhlIGVudHJ5J3MgbmFtZSAoYmFzZW5hbWUpXG4gIC8vIHNpemU6IG51bWJlcjsgLy8gZmlsZSBzaXplIGluIGJ5dGVzXG4gIC8vIG5saW5rczogbnVtYmVyOyAvLyBudW1iZXIgb2YgbGlua3NcbiAgLy8gYXRpbWU6IGRhdGU7IC8vIGxhc3QgYWNjZXNzIHRpbWUgYXMgSlMgRGF0ZSBPYmplY3RcbiAgLy8gbXRpbWU6IGRhdGU7IC8vIGxhc3QgbW9kaWZpZWQgdGltZSBhcyBKUyBEYXRlIE9iamVjdFxuICAvLyBjdGltZTogZGF0ZTsgLy8gY3JlYXRpb24gdGltZSBhcyBKUyBEYXRlIE9iamVjdFxuICAvLyBhdGltZU1zOiBudW1iZXI7IC8vIGxhc3QgYWNjZXNzIHRpbWUgYXMgVW5peCBUaW1lc3RhbXBcbiAgLy8gbXRpbWVNczogbnVtYmVyOyAvLyBsYXN0IG1vZGlmaWVkIHRpbWUgYXMgVW5peCBUaW1lc3RhbXBcbiAgLy8gY3RpbWVNczogbnVtYmVyOyAvLyBjcmVhdGlvbiB0aW1lIGFzIFVuaXggVGltZXN0YW1wXG4gICt0eXBlOiAnRklMRScgfCAnRElSRUNUT1JZJyB8ICdTWU1MSU5LJzsgLy8gZmlsZSB0eXBlXG4gIC8vIGdpZDogbnVtYmVyOyAvLyBncm91cCBuYW1lXG4gIC8vIHVpZDogbnVtYmVyOyAvLyBvd25lciBuYW1lXG4gIC8vIG1vZGU6IG51bWJlcjsgLy8gcGVybWlzc2lvbnNcbiAgLy8gdmVyc2lvbjogbnVtYmVyOyAvLyB2ZXJzaW9uIG9mIHRoZSBub2RlXG5cbiAgaXNGaWxlKCk6IGJvb2xlYW47IC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgbm9kZSBpcyBhIGZpbGUuXG4gIGlzRGlyZWN0b3J5KCk6IGJvb2xlYW47IC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgbm9kZSBpcyBhIGRpcmVjdG9yeS5cbiAgLy8gaXNCbG9ja0RldmljZSgpOiBib29sZWFuOyAvLyBOb3QgaW1wbGVtZW50ZWQsIHJldHVybnMgZmFsc2UuXG4gIC8vIGlzQ2hhcmFjdGVyRGV2aWNlKCk6IGJvb2xlYW47IC8vIE5vdCBpbXBsZW1lbnRlZCwgcmV0dXJucyBmYWxzZS5cbiAgaXNTeW1ib2xpY0xpbmsoKTogYm9vbGVhbjsgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBub2RlIGlzIGEgc3ltYm9saWMgbGluay5cbiAgLy8gaXNGSUZPKCk6IGJvb2xlYW47IC8vIE5vdCBpbXBsZW1lbnRlZCwgcmV0dXJucyBmYWxzZS5cbiAgLy8gaXNTb2NrZXQoKTogYm9vbGVhbjsgLy8gTm90IGltcGxlbWVudGVkLCByZXR1cm5zIGZhbHNlLlxufVxuXG5leHBvcnQgdHlwZSBGaWxlclJlY3Vyc2l2ZURpcmVjdG9yeUluZm8gPSBGaWxlclN0YXRJbmZvICYge1xuICAvLyBjb250ZW50cyBhcmUgYWRkZWQgZm9yIHNoLmxzKClcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICtjb250ZW50czogRmlsZXJSZWN1cnNpdmVTdGF0SW5mb1tdLFxufTtcblxuZXhwb3J0IHR5cGUgRmlsZXJSZWN1cnNpdmVTdGF0SW5mbyA9IEZpbGVyUmVjdXJzaXZlRGlyZWN0b3J5SW5mbyB8IEZpbGVyU3RhdEluZm87XG5cbi8qKlxuICogR2l2ZW4gYSBmaWxlLCByZXR1cm5zIHRoZSBuYW1lZCBjaGlsZCBmaWxlLlxuICogVGhlIG9wZXJhdGlvbiBmYWlscyBpZiB0aGUgZ2l2ZW4gZmlsZSBpcyBub3QgYSBkaXJlY3RvcnksXG4gKiBvciBpZiB0aGUgbmFtZWQgY2hpbGQgZG9lcyBub3QgZXhpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZChmaWxlOiBGaWxlclJlY3Vyc2l2ZVN0YXRJbmZvLCBuYW1lOiBzdHJpbmcpOiBGaWxlclJlY3Vyc2l2ZVN0YXRJbmZvIHtcbiAgaWYgKCFmaWxlLmlzRGlyZWN0b3J5KCkpIHRocm93IG5ldyBFcnJvcihgJyR7ZmlsZS5uYW1lfScgaXMgbm90IGEgZGlyZWN0b3J5YCk7XG4gIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgY29uc3QgZGlyZWN0b3J5OiBGaWxlclJlY3Vyc2l2ZURpcmVjdG9yeUluZm8gPSBmaWxlO1xuXG4gIC8vIEZpbmQgdGhlIGNoaWxkIGFuZCBtYWtlIHN1cmUgaXQgZXhpc3RzXG4gIGNvbnN0IGNoaWxkID0gZGlyZWN0b3J5LmNvbnRlbnRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gbmFtZSk7XG4gIGlmIChjaGlsZCA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBkb2VzIG5vdCBleGlzdGApO1xuICByZXR1cm4gY2hpbGQ7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBmaWxlLCByZXR1cm5zIG9uZSBvZiBpdHMgZGVzY2VuZGFudCBmaWxlcy5cbiAqIFRoZSBmaXJzdCBmcmFnbWVudCBtdXN0IGJlIHRoZSBuYW1lIG9mIGEgY2hpbGQgb2YgdGhlIGdpdmVuIGZpbGUsXG4gKiBUaGUgc2Vjb25kIHRoZSBuYW1lIG9mIG9uZSBvZiB0aGF0IGZpbGUncyBjaGlsZHJlbiBhbmQgc28gb24uXG4gKiBUaGUgb3BlcmF0aW9uIGZhaWxzIGlmIGFuIGludGVybWVkaWF0ZSBmaWxlIGZpbGUgaXMgbm90IGEgZGlyZWN0b3J5LFxuICogb3IgaWYgYSBuYW1lZCBkZXNjZW5kYW50IGRvZXMgbm90IGV4aXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY2VuZGFudChcbiAgZmlsZTogRmlsZXJSZWN1cnNpdmVTdGF0SW5mbyxcbiAgLi4uZnJhZ21lbnRzOiBzdHJpbmdbXVxuKTogRmlsZXJSZWN1cnNpdmVTdGF0SW5mbyB7XG4gIHJldHVybiBmcmFnbWVudHMucmVkdWNlKGdldENoaWxkLCBmaWxlKTtcbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgbmFtZSA9ICdQcm9qZWN0RXJyb3InO1xufVxuXG5jb25zdCBjbXBGaWxlID0gKGE6IEZpbGVyU3RhdEluZm8sIGI6IEZpbGVyU3RhdEluZm8pID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICAvLyBzb3J0IGRpcmVjdG9yaWVzIGJlZm9yZSBmaWxlcyAoJiBzeW1saW5rcylcbiAgY29uc3QgdHlwZVZhbCA9IChmKSA9PiAoZi5pc0RpcmVjdG9yeSgpID8gMCA6IDEpO1xuICByZXN1bHQgPSB0eXBlVmFsKGEpIC0gdHlwZVZhbChiKTtcbiAgaWYgKHJlc3VsdCAhPT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyBzb3J0IGFscGhhYmV0aWNhbGx5XG4gIHJlc3VsdCA9IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gIGlmIChyZXN1bHQgIT09IDApIHJldHVybiByZXN1bHQ7XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdWlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB1aWQ6IHN0cmluZykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy51aWQgPSB1aWQ7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0UHJvamVjdHMoKTogUHJvbWlzZTxQcm9qZWN0W10+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IHNoLnByb21pc2VzLmxzKCcvJyk7XG4gICAgcHJvamVjdHMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gICAgcmV0dXJuIHByb2plY3RzLm1hcCgoeyBuYW1lLCBub2RlOiB1aWQgfSkgPT4gbmV3IFByb2plY3QobmFtZSwgdWlkKSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0UHJvamVjdChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFByb2plY3Q+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF0aCA9IGZpbGVyLnBhdGgucmVzb2x2ZSgnLycsIG5hbWUpO1xuICAgICAgY29uc3QgeyBub2RlOiB1aWQgfSA9IGF3YWl0IGZzLnByb21pc2VzLnN0YXQocGF0aCk7XG4gICAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSwgdWlkKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKGV4IGluc3RhbmNlb2YgZmlsZXIuRXJyb3JzLkVOT0VOVClcbiAgICAgICAgdGhyb3cgbmV3IFByb2plY3RFcnJvcihgUHJvamVjdCBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgY29uc29sZS5lcnJvcihleCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgY3JlYXRlUHJvamVjdChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFByb2plY3Q+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF0aCA9IGZpbGVyLnBhdGgucmVzb2x2ZSgnLycsIG5hbWUpO1xuICAgICAgYXdhaXQgZnMucHJvbWlzZXMubWtkaXIocGF0aCk7XG4gICAgICBjb25zdCB7IG5vZGU6IHVpZCB9ID0gYXdhaXQgZnMucHJvbWlzZXMuc3RhdChwYXRoKTtcbiAgICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lLCB1aWQpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoZXggaW5zdGFuY2VvZiBmaWxlci5FcnJvcnMuRUVYSVNUKVxuICAgICAgICB0aHJvdyBuZXcgUHJvamVjdEVycm9yKGBQcm9qZWN0IFwiJHtuYW1lfVwiIGRvZXMgYWxyZWFkeSBleGlzdGApO1xuICAgICAgY29uc29sZS5lcnJvcihleCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlKC4uLmZyYWdtZW50czogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiBmaWxlci5wYXRoLnJlc29sdmUoJy8nLCB0aGlzLm5hbWUsIC4uLmZyYWdtZW50cyk7XG4gIH1cblxuICBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEZpbGVzKCk6IFByb21pc2U8RmlsZXJSZWN1cnNpdmVTdGF0SW5mbz4ge1xuICAgIGZ1bmN0aW9uIHNvcnRSZWN1cnNpdmVseShmaWxlOiBGaWxlclJlY3Vyc2l2ZVN0YXRJbmZvKSB7XG4gICAgICBpZiAoIWZpbGUuaXNEaXJlY3RvcnkoKSkgcmV0dXJuO1xuXG4gICAgICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gICAgICBjb25zdCBkaXI6IEZpbGVyUmVjdXJzaXZlRGlyZWN0b3J5SW5mbyA9IGZpbGU7XG4gICAgICBkaXIuY29udGVudHMuc29ydChjbXBGaWxlKTtcbiAgICAgIGRpci5jb250ZW50cy5mb3JFYWNoKChmKSA9PiBzb3J0UmVjdXJzaXZlbHkoZikpO1xuICAgIH1cblxuICAgIGNvbnN0IFtyb290LCBjb250ZW50c10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmcy5wcm9taXNlcy5zdGF0KHRoaXMucGF0aCksXG4gICAgICBzaC5wcm9taXNlcy5scyh0aGlzLnBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0pLFxuICAgIF0pO1xuXG4gICAgcm9vdC5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgIHNvcnRSZWN1cnNpdmVseShyb290KTtcblxuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgYXN5bmMgcmVuYW1lKG5ld05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXdQYXRoID0gZmlsZXIucGF0aC5yZXNvbHZlKCcvJywgbmV3TmFtZSk7XG4gICAgICBhd2FpdCBmcy5wcm9taXNlcy5yZW5hbWUodGhpcy5wYXRoLCBuZXdQYXRoKTtcbiAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmIChleCBpbnN0YW5jZW9mIGZpbGVyLkVycm9ycy5FTk9FTlQpXG4gICAgICAgIHRocm93IG5ldyBQcm9qZWN0RXJyb3IoYFByb2plY3QgXCIke3RoaXMubmFtZX1cIiBkb2VzIG5vIGxvbmdlciBleGlzdGApO1xuICAgICAgaWYgKGV4IGluc3RhbmNlb2YgZmlsZXIuRXJyb3JzLkVFWElTVClcbiAgICAgICAgdGhyb3cgbmV3IFByb2plY3RFcnJvcihgUHJvamVjdCBcIiR7bmV3TmFtZX1cIiBkb2VzIGFscmVhZHkgZXhpc3RgKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGVsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICAvLyB1c2UgU2hlbGwucm0gYXMgaXQgc3VwcG9ydHMgcmVjdXJzaXZlIHJlbW92YWxcbiAgICAgIGF3YWl0IHNoLnByb21pc2VzLnJtKHRoaXMucGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmIChleCBpbnN0YW5jZW9mIGZpbGVyLkVycm9ycy5FTk9FTlQpXG4gICAgICAgIHRocm93IG5ldyBQcm9qZWN0RXJyb3IoYFByb2plY3QgXCIke3RoaXMubmFtZX1cIiBkb2VzIG5vIGxvbmdlciBleGlzdGApO1xuICAgICAgY29uc29sZS5lcnJvcihleCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBekJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUE5RUE7QUFDQTtBQXNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7O0FDM2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFzQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBc0JBO0FBQ0E7QUExQkE7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFrQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBc0JBO0FBQ0E7QUExQkE7QUEyQkE7Ozs7Ozs7O0FDekdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBaUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFiQTtBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBaUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQWJBO0FBY0E7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBaUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQWJBO0FBY0E7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBV0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBeEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RLQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQXNDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFzQkE7QUFDQTtBQTFCQTtBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQWlDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBYkE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFFQTtBQUNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqR0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==