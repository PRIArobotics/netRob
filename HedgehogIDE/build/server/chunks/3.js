require("source-map-support").install();
exports.ids = [3];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/projects/ProjectList/ProjectList.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.ProjectList-container-EbP0l {\n  margin: 0 auto;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.ProjectList-root-3QuyZ {\n  margin: 40px 0;\n  padding: 16px 8px;\n}\n\n.ProjectList-toolbar-3l19l {\n  padding-right: 16px;\n}\n\n.ProjectList-title-6g3K3 {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/ProjectList.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,oCAAoC;CACrC;;AAED;EACE,eAAe;EACf,kBAAkB;CACnB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,qBAAqB;MACjB,aAAa;CAClB","file":"ProjectList.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.root {\n  margin: 40px 0;\n  padding: 16px 8px;\n}\n\n.toolbar {\n  padding-right: 16px;\n}\n\n.title {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n"],"sourceRoot":""}]);

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/misc/SimpleDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/ProjectList.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/useCloneRemoteProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/useCreateProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/useCreateRemoteProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/useDeleteProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/useDeleteRemoteProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/useRenameProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/projects/ProjectList/useShareProjectDialog.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLzMuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC9Qcm9qZWN0TGlzdC5zY3NzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL21pc2MvU2ltcGxlRGlhbG9nLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LnNjc3M/NmJjOCIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VDbG9uZVJlbW90ZVByb2plY3REaWFsb2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvdXNlQ3JlYXRlUHJvamVjdERpYWxvZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VDcmVhdGVSZW1vdGVQcm9qZWN0LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L3VzZUNyZWF0ZVJlbW90ZVByb2plY3REaWFsb2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvdXNlRGVsZXRlUHJvamVjdERpYWxvZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VEZWxldGVSZW1vdGVQcm9qZWN0LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L3VzZURlbGV0ZVJlbW90ZVByb2plY3REaWFsb2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvdXNlUHJvamVjdENvbnRlbnRRdWVyeS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VQcm9qZWN0SW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvdXNlUmVuYW1lUHJvamVjdERpYWxvZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VTaGFyZVByb2plY3REaWFsb2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvc3RvcmUvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBBcHBsaWNhdGlvbiBzcGVjaWZpY1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWhlZGdlaG9nLWdyZWVuLWxpZ2h0OiAjMzhiNDQ5O1xcbiAgLS1oZWRnZWhvZy1ncmVlbi1kYXJrOiAjMDA3YzNjO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLlByb2plY3RMaXN0LWNvbnRhaW5lci1FYlAwbCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC1yb290LTNRdXlaIHtcXG4gIG1hcmdpbjogNDBweCAwO1xcbiAgcGFkZGluZzogMTZweCA4cHg7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC10b29sYmFyLTNsMTlsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC10aXRsZS02ZzNLMyB7XFxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvUHJvamVjdExpc3Quc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0U7O2dGQUU4RTs7RUFFOUUsa0VBQWtFOztFQUVsRTs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLGdDQUFnQztFQUNoQywrQkFBK0I7O0VBRS9COztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQztDQUMzRDs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLHFCQUFxQjtNQUNqQixhQUFhO0NBQ2xCXCIsXCJmaWxlXCI6XCJQcm9qZWN0TGlzdC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBBcHBsaWNhdGlvbiBzcGVjaWZpY1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWhlZGdlaG9nLWdyZWVuLWxpZ2h0OiAjMzhiNDQ5O1xcbiAgLS1oZWRnZWhvZy1ncmVlbi1kYXJrOiAjMDA3YzNjO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblxcbi5yb290IHtcXG4gIG1hcmdpbjogNDBweCAwO1xcbiAgcGFkZGluZzogMTZweCA4cHg7XFxufVxcblxcbi50b29sYmFyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQcm9qZWN0TGlzdC1jb250YWluZXItRWJQMGxcIixcblx0XCJyb290XCI6IFwiUHJvamVjdExpc3Qtcm9vdC0zUXV5WlwiLFxuXHRcInRvb2xiYXJcIjogXCJQcm9qZWN0TGlzdC10b29sYmFyLTNsMTlsXCIsXG5cdFwidGl0bGVcIjogXCJQcm9qZWN0TGlzdC10aXRsZS02ZzNLM1wiXG59OyIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9jb21tb25NZXNzYWdlcyc7XG5cbnR5cGUgQWN0aW9uQ29uc3RhbnQgPSAnT0tfQ0FOQ0VMJyB8ICdPS19hdXRvZm9jdXNfQ0FOQ0VMJyB8ICdPS19DQU5DRUxfYXV0b2ZvY3VzJztcblxudHlwZSBTaW1wbGVEaWFsb2dQcm9wcyA9IHt8XG4gIGlkOiBzdHJpbmcsXG4gIG9wZW46IGJvb2xlYW4sXG4gIHZhbGlkOiBib29sZWFuLFxuICB0aXRsZT86IFJlYWN0Lk5vZGUsXG4gIGRlc2NyaXB0aW9uPzogUmVhY3QuTm9kZSxcbiAgYWN0aW9uczogQWN0aW9uQ29uc3RhbnQgfCBSZWFjdC5Ob2RlLFxuICBvbkNhbmNlbD86ICgpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+LFxuICBvbkNvbmZpcm0/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPixcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxufH07XG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB0aGUgbWF0ZXJpYWwtdWkgYERpYWxvZ2AgY29tcG9uZW50IGZvciBlYXN5IGRpc3BsYXkgb2YgZGlhbG9nc1xuICogd2l0aCB0aXRsZSwgbWFpbiBjb250ZW50LCBhbmQgYWN0aW9ucy5cbiAqIFRoZSBjb21wb25lbnQgdGFrZXMgY2FyZSBvZiBiYXNpYyBBUklBIGF0dHJpYnV0ZXMgZm9yIHRpdGxlIGFuZCBkZXNjcmlwdGlvbixcbiAqIGFuZCBkaXNwYXRjaGVzIGNsb3NlIGFuZCBzdWJtaXQgZXZlbnRzIHRvIHRoZSBjYWxsaW5nIGNvZGUuXG4gKlxuICogT25lIG9mIHRoZSBgQWN0aW9uQ29uc3RhbnRgcyBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IE9LL0NhbmNlbCBidXR0b25zLFxuICogb3IgYSBjdXN0b20gbGlzdC9mcmFnbWVudCBvZiBidXR0b25zIGNhbiBiZSBwYXNzZWQuXG4gKi9cbmZ1bmN0aW9uIFNpbXBsZURpYWxvZyh7XG4gIGlkLFxuICBvcGVuLFxuICB2YWxpZCxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBhY3Rpb25zLFxuICBvbkNhbmNlbCxcbiAgb25Db25maXJtLFxuICBjaGlsZHJlbixcbn06IFNpbXBsZURpYWxvZ1Byb3BzKSB7XG4gIGNvbnN0IGNvbmRpdGlvbmFsUHJvcHMgPSB7fTtcbiAgaWYgKHRpdGxlICE9PSB1bmRlZmluZWQpIGNvbmRpdGlvbmFsUHJvcHNbJ2FyaWEtbGFiZWxsZWRieSddID0gYCR7aWR9LXRpdGxlYDtcbiAgaWYgKGRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIGNvbmRpdGlvbmFsUHJvcHNbJ2FyaWEtZGVzY3JpYmVkYnknXSA9IGAke2lkfS1kZXNjcmlwdGlvbmA7XG5cbiAgbGV0IGFjdGlvbnNOb2RlOiBSZWFjdC5Ob2RlO1xuICBzd2l0Y2ggKGFjdGlvbnMpIHtcbiAgICBjYXNlICdPS19DQU5DRUwnOlxuICAgIGNhc2UgJ09LX2F1dG9mb2N1c19DQU5DRUwnOlxuICAgIGNhc2UgJ09LX0NBTkNFTF9hdXRvZm9jdXMnOlxuICAgICAgYWN0aW9uc05vZGUgPSAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DYW5jZWx9XG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBhdXRvRm9jdXM9e2FjdGlvbnMgPT09ICdPS19DQU5DRUxfYXV0b2ZvY3VzJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMuY2FuY2VsfSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshdmFsaWR9XG4gICAgICAgICAgICBhdXRvRm9jdXM9e2FjdGlvbnMgPT09ICdPS19hdXRvZm9jdXNfQ0FOQ0VMJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMub2t9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBhY3Rpb25zTm9kZSA9IGFjdGlvbnM7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAob25Db25maXJtICE9PSB1bmRlZmluZWQpIG9uQ29uZmlybSgpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e29uQ2FuY2VsfSB7Li4uY29uZGl0aW9uYWxQcm9wc30+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAge3RpdGxlICE9PSB1bmRlZmluZWQgPyA8RGlhbG9nVGl0bGUgaWQ9e2Ake2lkfS10aXRsZWB9Pnt0aXRsZX08L0RpYWxvZ1RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIHtkZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPXtgJHtpZH0tZGVzY3JpcHRpb25gfT57ZGVzY3JpcHRpb259PC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+e2FjdGlvbnNOb2RlfTwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlRGlhbG9nO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXMnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIHVzZUludGwsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IFBvcHVwU3RhdGUsIHsgYmluZFRyaWdnZXIsIGJpbmRNZW51IH0gZnJvbSAnbWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUnO1xuXG5pbXBvcnQge1xuICBMb2NhbFByb2plY3RJY29uLFxuICBVcGxvYWRFeGVyY2lzZUljb24sXG4gIENyZWF0ZUljb24sXG4gIE9wZW5JY29uLFxuICBSZW5hbWVJY29uLFxuICBEZWxldGVJY29uLFxuICBSZWZyZXNoSWNvbixcbn0gZnJvbSAnLi4vLi4vbWlzYy9wYWxldHRlJztcblxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vbWlzYy9MaW5rJztcbmltcG9ydCBTaW1wbGVEaWFsb2cgZnJvbSAnLi4vLi4vbWlzYy9TaW1wbGVEaWFsb2cnO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmltcG9ydCBzIGZyb20gJy4vUHJvamVjdExpc3Quc2Nzcyc7XG5pbXBvcnQgdXNlU2hhcmVQcm9qZWN0RGlhbG9nIGZyb20gJy4vdXNlU2hhcmVQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB1c2VDcmVhdGVQcm9qZWN0RGlhbG9nIGZyb20gJy4vdXNlQ3JlYXRlUHJvamVjdERpYWxvZyc7XG5pbXBvcnQgdXNlRGVsZXRlUHJvamVjdERpYWxvZyBmcm9tICcuL3VzZURlbGV0ZVByb2plY3REaWFsb2cnO1xuaW1wb3J0IHVzZVJlbmFtZVByb2plY3REaWFsb2cgZnJvbSAnLi91c2VSZW5hbWVQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB1c2VDcmVhdGVSZW1vdGVQcm9qZWN0RGlhbG9nIGZyb20gJy4vdXNlQ3JlYXRlUmVtb3RlUHJvamVjdERpYWxvZyc7XG5pbXBvcnQgdXNlRGVsZXRlUmVtb3RlUHJvamVjdERpYWxvZyBmcm9tICcuL3VzZURlbGV0ZVJlbW90ZVByb2plY3REaWFsb2cnO1xuaW1wb3J0IHVzZUNsb25lUmVtb3RlUHJvamVjdERpYWxvZyBmcm9tICcuL3VzZUNsb25lUmVtb3RlUHJvamVjdERpYWxvZyc7XG5pbXBvcnQgdXNlUHJvamVjdEluZGV4LCB7IHR5cGUgUmVtb3RlUHJvamVjdCB9IGZyb20gJy4vdXNlUHJvamVjdEluZGV4JztcbmltcG9ydCB1c2VDcmVhdGVSZW1vdGVQcm9qZWN0IGZyb20gJy4vdXNlQ3JlYXRlUmVtb3RlUHJvamVjdCc7XG5pbXBvcnQgdXNlRGVsZXRlUmVtb3RlUHJvamVjdCBmcm9tICcuL3VzZURlbGV0ZVJlbW90ZVByb2plY3QnO1xuaW1wb3J0IHVzZVByb2plY3RDb250ZW50UXVlcnksIHsgcG9wdWxhdGVQcm9qZWN0IH0gZnJvbSAnLi91c2VQcm9qZWN0Q29udGVudFF1ZXJ5JztcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3VzZXJzL0F1dGhQcm92aWRlcic7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICBwcm9qZWN0c1RpdGxlOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMubGlzdF90aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBzaG93biBhYm92ZSB0aGUgcHJvamVjdCBsaXN0JyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1lvdXIgUHJvamVjdHMnLFxuICB9LFxuICBjcmVhdGVQcm9qZWN0VG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLmNyZWF0ZV9wcm9qZWN0X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIGNyZWF0ZSBwcm9qZWN0IGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgUHJvamVjdCcsXG4gIH0sXG4gIHJlZnJlc2hQcm9qZWN0TGlzdFRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5yZWZyZXNoX3Byb2plY3RfbGlzdF90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSByZWZyZXNoIHByb2plY3RzIGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdSZWZyZXNoIFByb2plY3QgTGlzdCcsXG4gIH0sXG4gIHNoYXJlUHJvamVjdFRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5zaGFyZV9wcm9qZWN0X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIHNoYXJlIHByb2plY3QgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1NoYXJlIFByb2plY3QgXCJ7bmFtZX1cIicsXG4gIH0sXG4gIHJlbmFtZVByb2plY3RUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMucmVuYW1lX3Byb2plY3RfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgcmVuYW1lIHByb2plY3QgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1JlbmFtZSBQcm9qZWN0IFwie25hbWV9XCInLFxuICB9LFxuICBkZWxldGVQcm9qZWN0VG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLmRlbGV0ZV9wcm9qZWN0X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIGRlbGV0ZSBwcm9qZWN0IGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdEZWxldGUgUHJvamVjdCBcIntuYW1lfVwiJyxcbiAgfSxcbiAgZXhlcmNpc2VzVGl0bGU6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMubGlzdF90aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBzaG93biBhYm92ZSB0aGUgZXhlcmNpc2VzIGxpc3QnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUmVtb3RlIFByb2pla3RzJyxcbiAgfSxcbiAgcmVmcmVzaEV4ZXJjaXNlTGlzdFRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMucmVmcmVzaF9leGVyY2lzZV9saXN0X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIHJlZnJlc2ggZXhlcmNpc2VzIGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdSZWZyZXNoIEV4ZXJjaXNlIExpc3QnLFxuICB9LFxuICBleGVyY2lzZVNlY29uZGFyeVRleHQ6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuc2Vjb25kYXJ5X3RleHQnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyB0ZXh0IGlzIHNob3duIGJlbG93IHRoZSBleGVyY2lzZSBuYW1lIGFuZCBkZXNjcmliZXMgaXQgZnVydGhlcicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdEaWZmaWN1bHR5OiB7bGV2ZWx9JyxcbiAgfSxcbiAgdXBsb2FkRXhlcmNpc2VUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLnVwbG9hZF9leGVyY2lzZV90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSB1cGxvYWQgZXhlcmNpc2UgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1VwbG9hZCBwcm9qZWN0IFwie25hbWV9XCIgYXMgYW4gZXhlcmNpc2UnLFxuICB9LFxuICBjbG9uZUV4ZXJjaXNlVG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5jbG9uZV9leGVyY2lzZV90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSBjbG9uZSBleGVyY2lzZSBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ3JlYXRlIG5ldyBwcm9qZWN0IHRvIHdvcmsgb24gZXhlcmNpc2UgXCJ7bmFtZX1cIicsXG4gIH0sXG4gIG9wZW5Bc3NvY2lhdGVkUHJvamVjdFRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMub3Blbl9hc3NvY2lhdGVkX3Byb2plY3RfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSBvcGVuIHByb2plY3QgYnV0dG9uLiBUaGF0IGJ1dHRvbiBpcyBzaG93biBpZiB0aGVyZSdzIGV4YWN0bHkgb25lIGFzc29jaWF0ZWQgcHJvamVjdC5cIixcbiAgICBkZWZhdWx0TWVzc2FnZTogJ09wZW4gcHJvamVjdCBcIntuYW1lfVwiIHRvIHdvcmsgb24gZXhlcmNpc2UgXCJ7ZXhlcmNpc2V9XCInLFxuICB9LFxuICBvcGVuQXNzb2NpYXRlZFByb2plY3RNZW51VG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5vcGVuX2Fzc29jaWF0ZWRfcHJvamVjdF9tZW51X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSBvcGVuIHByb2plY3QgbWVudSBidXR0b24uIFRoYXQgYnV0dG9uIGlzIHNob3duIGlmIHRoZXJlIGFyZSB0d28gb3IgbW9yZSBhc3NvY2lhdGVkIHByb2plY3RzLicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdPcGVuIGFuIGV4aXN0aW5nIHByb2plY3QgdG8gd29yayBvbiBleGVyY2lzZSBcIntleGVyY2lzZX1cIicsXG4gIH0sXG4gIG9wZW5Bc3NvY2lhdGVkUHJvamVjdE1lbnVJdGVtOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLm9wZW5fYXNzb2NpYXRlZF9wcm9qZWN0X21lbnVfaXRlbScsXG4gICAgZGVzY3JpcHRpb246ICd0ZXh0IGZvciB0aGUgbWVudSBpdGVtcyBpbiB0aGUgYXNzb2NpYXRlZCBwcm9qZWN0cyBtZW51LicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdPcGVuIHByb2plY3QgXCJ7bmFtZX1cIicsXG4gIH0sXG4gIGVkaXRFeGVyY2lzZVRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuZWRpdF9leGVyY2lzZV90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSBlZGl0IGV4ZXJjaXNlIGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdFZGl0IEV4ZXJjaXNlIFwie25hbWV9XCInLFxuICB9LFxuICBkZWxldGVFeGVyY2lzZVRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuZGVsZXRlX2V4ZXJjaXNlX3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIGRlbGV0ZSBleGVyY2lzZSBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnRGVsZXRlIEV4ZXJjaXNlIFwie25hbWV9XCInLFxuICB9LFxufSk7XG5cbnR5cGUgUHJvcHMgPSB7fHx9O1xuXG4vKipcbiAqIFRoZSBQcm9qZWN0TGlzdCBjb21wb25lbnQgaGFzIHR3byBwdXJwb3NlczpcbiAqIHNob3cgYSBsaXN0IG9mIGxvY2FsIHByb2plY3RzIChzdG9yZWQgaW4gdGhlIFwiZmlsZXJcIiBicm93c2VyIGZpbGUgc3lzdGVtKSxcbiAqIGFuZCBzaG93IGEgbGlzdCBvZiByZW1vdGUgcHJvamVjdHMgKGFjY2Vzc2VkIHZpYSBHcmFwaFFMKS5cbiAqIFRoZSBjb21wb25lbnQgYWxsb3dzIG1hbmFnaW5nIGxvY2FsIHByb2plY3RzIGFuZCwgZm9yIGxvZ2dlZCBpbiB1c2VycywgcmVtb3RlIHByb2plY3RzIGFzIHdlbGwuXG4gKi9cbmZ1bmN0aW9uIFByb2plY3RMaXN0KF9wcm9wczogUHJvcHMpIHtcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcbiAgY29uc3QgaW50bCA9IHVzZUludGwoKTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0TXV0YXRpb24gPSB1c2VDcmVhdGVSZW1vdGVQcm9qZWN0KCk7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RNdXRhdGlvbiA9IHVzZURlbGV0ZVJlbW90ZVByb2plY3QoKTtcbiAgY29uc3QgbG9hZFByb2plY3RDb250ZW50ID0gdXNlUHJvamVjdENvbnRlbnRRdWVyeSgpO1xuXG4gIGNvbnN0IFtcbiAgICB7IGxvY2FsUHJvamVjdHMsIHJlbW90ZVByb2plY3RzLCBsb2NhbFRvUmVtb3RlTWFwLCByZW1vdGVUb0xvY2FsTWFwIH0sXG4gICAgcHJvamVjdEluZGV4RGlzcGF0Y2gsXG4gIF0gPSB1c2VQcm9qZWN0SW5kZXgoKTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25maXJtQ3JlYXRlUHJvamVjdChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgUHJvamVjdC5jcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKCEoZXggaW5zdGFuY2VvZiBQcm9qZWN0RXJyb3IpKSB0aHJvdyBleDtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IHVzZUNyZWF0ZVByb2plY3REaWFsb2coY29uZmlybUNyZWF0ZVByb2plY3QsIGxvY2FsUHJvamVjdHMpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1EZWxldGVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcHJvamVjdC5kZWxldGUoKTtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFTU9WRV9NQVBQSU5HJywgcHJvamVjdFVpZDogcHJvamVjdC51aWQgfSk7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoIShleCBpbnN0YW5jZW9mIFByb2plY3RFcnJvcikpIHRocm93IGV4O1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IHVzZURlbGV0ZVByb2plY3REaWFsb2coY29uZmlybURlbGV0ZVByb2plY3QpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1SZW5hbWVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QsIG5ld05hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBwcm9qZWN0LnJlbmFtZShuZXdOYW1lKTtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmICghKGV4IGluc3RhbmNlb2YgUHJvamVjdEVycm9yKSkgdGhyb3cgZXg7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcmVQcm9qZWN0ID0gdXNlU2hhcmVQcm9qZWN0RGlhbG9nKGNvbmZpcm1TaGFyZVByb2plY3QsbG9jYWxQcm9qZWN0cylcbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybVNoYXJlUHJvamVjdChsb2NhbFByb2plY3Q6IFByb2plY3QpOiBQcm9taXNlIDxib29vbGVhbj57XG4gICAgY29uc3QgaWQgPSBhd2FpdCBjcmVhdGVQcm9qZWN0TXVhdGlvbihsb2NhbFByb2plY3QpO1xuICAgIHByb2plY3RJbmRleERpc3BhdGNoKHtcbiAgICAgIHR5cGU6J0FkZF9NQVBQSU5HJyxcbiAgICAgIHByb2plY3RVaWQ6IGxvY2FsUHJvamVjdC51aWQsXG4gICAgICByZW1vdGVJZDogaWQsIFxuICAgIH0pO1xuICAgIHByb2plY3RJbmRleERpc3BhdGNoKHt0eXBlOiAnUkVGUkVTSF9SRU1PVEUnfSlcbiAgICByZXR1cm4gdHJ1ZTsgXG4gIH1cbiAgY29uc3QgcmVuYW1lUHJvamVjdCA9IHVzZVJlbmFtZVByb2plY3REaWFsb2coY29uZmlybVJlbmFtZVByb2plY3QsIGxvY2FsUHJvamVjdHMpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1DcmVhdGVSZW1vdGVQcm9qZWN0KGxvY2FsUHJvamVjdDogUHJvamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGlkID0gYXdhaXQgY3JlYXRlUHJvamVjdE11dGF0aW9uKGxvY2FsUHJvamVjdCk7XG4gICAgcHJvamVjdEluZGV4RGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0FERF9NQVBQSU5HJyxcbiAgICAgIHByb2plY3RVaWQ6IGxvY2FsUHJvamVjdC51aWQsXG4gICAgICByZW1vdGVJZDogaWQsXG4gICAgfSk7XG4gICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9SRU1PVEUnIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlUmVtb3RlUHJvamVjdCA9IHVzZUNyZWF0ZVJlbW90ZVByb2plY3REaWFsb2coY29uZmlybUNyZWF0ZVJlbW90ZVByb2plY3QpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1EZWxldGVSZW1vdGVQcm9qZWN0KHByb2plY3Q6IFJlbW90ZVByb2plY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBhd2FpdCBkZWxldGVQcm9qZWN0TXV0YXRpb24ocHJvamVjdC5pZCk7XG4gICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9SRU1PVEUnIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgZGVsZXRlUmVtb3RlUHJvamVjdCA9IHVzZURlbGV0ZVJlbW90ZVByb2plY3REaWFsb2coY29uZmlybURlbGV0ZVJlbW90ZVByb2plY3QpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1DbG9uZVJlbW90ZVByb2plY3QocHJvamVjdDogUmVtb3RlUHJvamVjdCwgbmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnQgPSBhd2FpdCBsb2FkUHJvamVjdENvbnRlbnQocHJvamVjdC5pZCk7XG4gICAgfSBjYXRjaCAoX2V4KSB7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX1JFTU9URScgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9jYWxQcm9qZWN0ID0gYXdhaXQgUHJvamVjdC5jcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgICAgYXdhaXQgcG9wdWxhdGVQcm9qZWN0KGxvY2FsUHJvamVjdCwgY29udGVudCk7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KTtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ0FERF9NQVBQSU5HJyxcbiAgICAgICAgcHJvamVjdFVpZDogbG9jYWxQcm9qZWN0LnVpZCxcbiAgICAgICAgcmVtb3RlSWQ6IHByb2plY3QuaWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoIShleCBpbnN0YW5jZW9mIFByb2plY3RFcnJvcikpIHRocm93IGV4O1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvbmVSZW1vdGVQcm9qZWN0ID0gdXNlQ2xvbmVSZW1vdGVQcm9qZWN0RGlhbG9nKGNvbmZpcm1DbG9uZVJlbW90ZVByb2plY3QsIGxvY2FsUHJvamVjdHMpO1xuXG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIWF1dGguYXV0aERhdGE7XG5cbiAgdXNlU3R5bGVzKHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17cy50b29sYmFyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3MudGl0bGV9IHZhcmlhbnQ9XCJoNVwiIG5vV3JhcD5cbiAgICAgICAgICAgIDxNIHsuLi5tZXNzYWdlcy5wcm9qZWN0c1RpdGxlfSAvPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNyZWF0ZVByb2plY3RUb29sdGlwKX0gcGxhY2VtZW50PVwiYm90dG9tXCI+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuY3JlYXRlUHJvamVjdFRvb2x0aXApfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVQcm9qZWN0LnNob3d9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDcmVhdGVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJlZnJlc2hQcm9qZWN0TGlzdFRvb2x0aXApfVxuICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJlZnJlc2hQcm9qZWN0TGlzdFRvb2x0aXApfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlZnJlc2hJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIHtsb2NhbFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPExpc3RJdGVtIGtleT17cHJvamVjdC5uYW1lfSBidXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz17YC9wcm9qZWN0cy8ke3Byb2plY3QubmFtZX1gfT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8TG9jYWxQcm9qZWN0SWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Byb2plY3QubmFtZX0gLz5cbiAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy51cGxvYWRFeGVyY2lzZVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy51cGxvYWRFeGVyY2lzZVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvamVjdC51aWQgaW4gbG9jYWxUb1JlbW90ZU1hcH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcmVhdGVSZW1vdGVQcm9qZWN0LnNob3cocHJvamVjdCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkRXhlcmNpc2VJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZW5hbWVQcm9qZWN0VG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJlbmFtZVByb2plY3RUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVuYW1lUHJvamVjdC5zaG93KHByb2plY3QpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8UmVuYW1lSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kZWxldGVQcm9qZWN0VG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kZWxldGVQcm9qZWN0VG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVByb2plY3Quc2hvdyhwcm9qZWN0KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDxTaW1wbGVEaWFsb2cgaWQ9XCJjcmVhdGUtZGlhbG9nXCIgey4uLmNyZWF0ZVByb2plY3QubW91bnRTaW1wbGVEaWFsb2coKX0gLz5cbiAgICAgICAgPFNpbXBsZURpYWxvZyBpZD1cInNoYXJlLWRpYWxvZ1wiIHsuLi5zaGFyZVByb2plY3QubW91bnRTaW1wbGVEaWFsb2coKX0gLz5cbiAgICAgICAgPFNpbXBsZURpYWxvZyBpZD1cImRlbGV0ZS1kaWFsb2dcIiB7Li4uZGVsZXRlUHJvamVjdC5tb3VudFNpbXBsZURpYWxvZygpfSAvPlxuICAgICAgICA8U2ltcGxlRGlhbG9nIGlkPVwicmVuYW1lLWRpYWxvZ1wiIHsuLi5yZW5hbWVQcm9qZWN0Lm1vdW50U2ltcGxlRGlhbG9nKCl9IC8+XG4gICAgICAgIDxTaW1wbGVEaWFsb2cgaWQ9XCJjcmVhdGUtcmVtb3RlLWRpYWxvZ1wiIHsuLi5jcmVhdGVSZW1vdGVQcm9qZWN0Lm1vdW50U2ltcGxlRGlhbG9nKCl9IC8+XG4gICAgICA8L1BhcGVyPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtzLnRvb2xiYXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17cy50aXRsZX0gdmFyaWFudD1cImg1XCIgbm9XcmFwPlxuICAgICAgICAgICAgPE0gey4uLm1lc3NhZ2VzLmV4ZXJjaXNlc1RpdGxlfSAvPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZWZyZXNoRXhlcmNpc2VMaXN0VG9vbHRpcCl9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVmcmVzaEV4ZXJjaXNlTGlzdFRvb2x0aXApfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX1JFTU9URScgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZWZyZXNoSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8TGlzdD5cbiAgICAgICAgICB7cmVtb3RlUHJvamVjdHMubWFwKChleGVyY2lzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzb2NpYXRlZFByb2plY3RzID0gcmVtb3RlVG9Mb2NhbE1hcFtleGVyY2lzZS5pZF0gPz8gW107XG5cbiAgICAgICAgICAgIGNvbnN0IGhhc09wZW5Db21tYW5kID0gYXNzb2NpYXRlZFByb2plY3RzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNPcGVuUG9wdXAgPSBhc3NvY2lhdGVkUHJvamVjdHMubGVuZ3RoID4gMTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0FkbWluQ29tbWFuZHMgPSBpc0xvZ2dlZEluO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtleGVyY2lzZS5pZH0gYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbFByb2plY3RJY29uIC8+XG4gICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2V4ZXJjaXNlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAvLyBzZWNvbmRhcnk9e2ludGwuZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICAgICAgICAgIC8vICAgbWVzc2FnZXMuZXhlcmNpc2VTZWNvbmRhcnlUZXh0LFxuICAgICAgICAgICAgICAgICAgLy8gICB7XG4gICAgICAgICAgICAgICAgICAvLyAgICAgLi4uZXhlcmNpc2UsXG4gICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAvLyApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jbG9uZUV4ZXJjaXNlVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHsuLi4oIWhhc09wZW5Db21tYW5kID8geyBlZGdlOiAnZW5kJyB9IDoge30pfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jbG9uZUV4ZXJjaXNlVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9uZVJlbW90ZVByb2plY3Quc2hvdyhleGVyY2lzZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICB7IWhhc09wZW5Db21tYW5kID8gbnVsbCA6ICFoYXNPcGVuUG9wdXAgPyAoXG4gICAgICAgICAgICAgICAgICAgIGFzc29jaWF0ZWRQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm9wZW5Bc3NvY2lhdGVkUHJvamVjdFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2U6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKCFoYXNBZG1pbkNvbW1hbmRzID8geyBlZGdlOiAnZW5kJyB9IDoge30pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMub3BlbkFzc29jaWF0ZWRQcm9qZWN0VG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvcHJvamVjdHMvJHtwcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5JY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFBvcHVwU3RhdGUgdmFyaWFudD1cInBvcG92ZXJcIiBwb3B1cElkPXtgJHtleGVyY2lzZS5uYW1lfS1tZW51YH0+XG4gICAgICAgICAgICAgICAgICAgICAgeyhwb3B1cFN0YXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMub3BlbkFzc29jaWF0ZWRQcm9qZWN0TWVudVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLighaGFzQWRtaW5Db21tYW5kcyA/IHsgZWRnZTogJ2VuZCcgfSA6IHt9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5iaW5kVHJpZ2dlcihwb3B1cFN0YXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMub3BlbkFzc29jaWF0ZWRQcm9qZWN0TWVudVRvb2x0aXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhlcmNpc2U6IGV4ZXJjaXNlLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5JY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uYmluZE1lbnUocG9wdXBTdGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzb2NpYXRlZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL3Byb2plY3RzLyR7cHJvamVjdC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLm1lc3NhZ2VzLm9wZW5Bc3NvY2lhdGVkUHJvamVjdE1lbnVJdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17eyBuYW1lOiBwcm9qZWN0Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wdXBTdGF0ZT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7IWhhc0FkbWluQ29tbWFuZHMgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmVkaXRFeGVyY2lzZVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZWRpdEV4ZXJjaXNlVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiAuLi59XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5hbWVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRlbGV0ZUV4ZXJjaXNlVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGVsZXRlRXhlcmNpc2VUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVJlbW90ZVByb2plY3Quc2hvdyhleGVyY2lzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgICAgPFNpbXBsZURpYWxvZyBpZD1cImNsb25lLXJlbW90ZS1kaWFsb2dcIiB7Li4uY2xvbmVSZW1vdGVQcm9qZWN0Lm1vdW50U2ltcGxlRGlhbG9nKCl9IC8+XG4gICAgICAgIDxTaW1wbGVEaWFsb2cgaWQ9XCJkZWxldGUtcmVtb3RlLWRpYWxvZ1wiIHsuLi5kZWxldGVSZW1vdGVQcm9qZWN0Lm1vdW50U2ltcGxlRGlhbG9nKCl9IC8+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGlzdDtcbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vUHJvamVjdExpc3Quc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL1Byb2plY3RMaXN0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL1Byb2plY3RMaXN0LnNjc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cbmltcG9ydCBTaW1wbGVEaWFsb2cgZnJvbSAnLi4vLi4vbWlzYy9TaW1wbGVEaWFsb2cnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5pbXBvcnQgeyB0eXBlIFJlbW90ZVByb2plY3QgfSBmcm9tICcuL3VzZVByb2plY3RJbmRleCc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICB0aXRsZToge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5jbG9uZV9leGVyY2lzZV9kaWFsb2cudGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgZm9yIHRoZSBleGVyY2lzZSBjbG9uaW5nIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgbmV3IHByb2plY3QnLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5jbG9uZV9leGVyY2lzZV9kaWFsb2cuZGVzY3JpcHRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBmb3IgdGhlIGV4ZXJjaXNlIGNsb25pbmcgZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1BsZWFzZSBlbnRlciB0aGUgcHJvamVjdCBuYW1lIGZvciB3b3JraW5nIG9uIGV4ZXJjaXNlIFwie25hbWV9XCIuJyxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuY2xvbmVfZXhlcmNpc2VfZGlhbG9nLm5ld19uYW1lX2xhYmVsJyxcbiAgICBkZXNjcmlwdGlvbjogXCJMYWJlbCBmb3IgdGhlIGV4ZXJjaXNlIGNsb25pbmcgZGlhbG9nJ3MgdGV4dCBmaWVsZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUHJvamVjdCBOYW1lJyxcbiAgfSxcbn0pO1xuXG50eXBlIFNpbXBsZURpYWxvZ1Byb3BzID0gUmVhY3QuRWxlbWVudFByb3BzPHR5cGVvZiBTaW1wbGVEaWFsb2c+O1xuXG4vLyB0aGlzIHR5cGUgaGFzIGFsbCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGdlbmVyYXRlZCBieSBtb3VudFNpbXBsZURpYWxvZygpXG50eXBlIE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyA9ICREaWZmPFxuICBTaW1wbGVEaWFsb2dQcm9wcyxcbiAgLy8gdGhlc2UgYXJlIHRoZSBvbmVzIHRoYXQgYXJlbid0XG4gIHt8XG4gICAgaWQ6ICRQcm9wZXJ0eVR5cGU8U2ltcGxlRGlhbG9nUHJvcHMsICdpZCc+LFxuICB8fSxcbj47XG5cbnR5cGUgQ2xvbmVSZW1vdGVQcm9qZWN0RGlhbG9nSG9vayA9IHt8XG4gIHNob3cocHJvamVjdDogUmVtb3RlUHJvamVjdCk6IHZvaWQsXG4gIG1vdW50U2ltcGxlRGlhbG9nKCk6IE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyxcbnx9O1xuXG50eXBlIENvbmZpZyA9IHt8XG4gIHByb2plY3Q6IFJlbW90ZVByb2plY3QsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2xvbmVSZW1vdGVQcm9qZWN0RGlhbG9nKFxuICBvbkNyZWF0ZTogKHByb2plY3Q6IFJlbW90ZVByb2plY3QsIG5hbWU6IHN0cmluZykgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4sXG4gIGFsbFByb2plY3RzOiBQcm9qZWN0W10sXG4pOiBDbG9uZVJlbW90ZVByb2plY3REaWFsb2dIb29rIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8Q29uZmlnIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtuZXdQcm9qZWN0TmFtZSwgc2V0TmV3UHJvamVjdE5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgZnVuY3Rpb24gc2hvdyhwcm9qZWN0OiBSZW1vdGVQcm9qZWN0KSB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgICBzZXRDb25maWcoeyBwcm9qZWN0IH0pO1xuICAgIHNldE5ld1Byb2plY3ROYW1lKCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWVDbGVhbiA9IG5hbWUucmVwbGFjZSgvW14tXFx3IyQlKCkuLDo7IF0vZywgJycpO1xuICAgIHNldE5ld1Byb2plY3ROYW1lKG5hbWVDbGVhbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIW9wZW4pIHRocm93ICdkaWFsb2cgaXMgbm90IHNob3duJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmIChjb25maWcgPT09IG51bGwpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBjb25zdCB7IHByb2plY3QgfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBvbkNyZWF0ZShwcm9qZWN0LCBuZXdQcm9qZWN0TmFtZSk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbGlkID1cbiAgICBuZXdQcm9qZWN0TmFtZSAhPT0gJycgJiYgYWxsUHJvamVjdHMuZXZlcnkoKHByb2plY3QpID0+IHByb2plY3QubmFtZSAhPT0gbmV3UHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IG5hbWUgPSBjb25maWc/LnByb2plY3QubmFtZSA/PyAnJztcblxuICByZXR1cm4ge1xuICAgIHNob3csXG4gICAgbW91bnRTaW1wbGVEaWFsb2coKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGVuLFxuICAgICAgICB2YWxpZCxcbiAgICAgICAgdGl0bGU6IDxNIHsuLi5tZXNzYWdlcy50aXRsZX0gLz4sXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8TSB7Li4ubWVzc2FnZXMuZGVzY3JpcHRpb259IHZhbHVlcz17eyBuYW1lIH19IC8+LFxuICAgICAgICBhY3Rpb25zOiAnT0tfQ0FOQ0VMJyxcbiAgICAgICAgb25DYW5jZWwsXG4gICAgICAgIG9uQ29uZmlybSxcbiAgICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBsYWJlbD17PE0gey4uLm1lc3NhZ2VzLmxhYmVsfSAvPn1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQcm9qZWN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGVycm9yPXshdmFsaWR9XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAvPlxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cbmltcG9ydCBTaW1wbGVEaWFsb2cgZnJvbSAnLi4vLi4vbWlzYy9TaW1wbGVEaWFsb2cnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICB0aXRsZToge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLmNyZWF0ZV9wcm9qZWN0X2RpYWxvZy50aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBmb3IgdGhlIHByb2plY3QgY3JlYXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NyZWF0ZSBuZXcgcHJvamVjdCcsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMuY3JlYXRlX3Byb2plY3RfZGlhbG9nLmRlc2NyaXB0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RleHQgZm9yIHRoZSBwcm9qZWN0IGNyZWF0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIHRoZSBuZXcgcHJvamVjdCdzIG5hbWUuXCIsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMuY3JlYXRlX3Byb2plY3RfZGlhbG9nLm5ld19uYW1lX2xhYmVsJyxcbiAgICBkZXNjcmlwdGlvbjogXCJMYWJlbCBmb3IgdGhlIHByb2plY3QgY3JlYXRpb24gZGlhbG9nJ3MgdGV4dCBmaWVsZFwiLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUHJvamVjdCBOYW1lJyxcbiAgfSxcbn0pO1xuXG50eXBlIFNpbXBsZURpYWxvZ1Byb3BzID0gUmVhY3QuRWxlbWVudFByb3BzPHR5cGVvZiBTaW1wbGVEaWFsb2c+O1xuXG4vLyB0aGlzIHR5cGUgaGFzIGFsbCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGdlbmVyYXRlZCBieSBtb3VudFNpbXBsZURpYWxvZygpXG50eXBlIE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyA9ICREaWZmPFxuICBTaW1wbGVEaWFsb2dQcm9wcyxcbiAgLy8gdGhlc2UgYXJlIHRoZSBvbmVzIHRoYXQgYXJlbid0XG4gIHt8XG4gICAgaWQ6ICRQcm9wZXJ0eVR5cGU8U2ltcGxlRGlhbG9nUHJvcHMsICdpZCc+LFxuICB8fSxcbj47XG5cbnR5cGUgQ3JlYXRlUHJvamVjdERpYWxvZ0hvb2sgPSB7fFxuICBzaG93KCk6IHZvaWQsXG4gIG1vdW50U2ltcGxlRGlhbG9nKCk6IE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDcmVhdGVQcm9qZWN0RGlhbG9nKFxuICBvbkNyZWF0ZTogKHN0cmluZykgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4sXG4gIGFsbFByb2plY3RzOiBQcm9qZWN0W10sXG4pOiBDcmVhdGVQcm9qZWN0RGlhbG9nSG9vayB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW25ld1Byb2plY3ROYW1lLCBzZXROZXdQcm9qZWN0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBmdW5jdGlvbiBzaG93KCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0TmV3UHJvamVjdE5hbWUoJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZUNsZWFuID0gbmFtZS5yZXBsYWNlKC9bXi1cXHcjJCUoKS4sOjsgXS9nLCAnJyk7XG4gICAgc2V0TmV3UHJvamVjdE5hbWUobmFtZUNsZWFuKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghb3BlbikgdGhyb3cgJ2RpYWxvZyBpcyBub3Qgc2hvd24nO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IG9uQ3JlYXRlKG5ld1Byb2plY3ROYW1lKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFsaWQgPVxuICAgIG5ld1Byb2plY3ROYW1lICE9PSAnJyAmJiBhbGxQcm9qZWN0cy5ldmVyeSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lICE9PSBuZXdQcm9qZWN0TmFtZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93LFxuICAgIG1vdW50U2ltcGxlRGlhbG9nKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgdmFsaWQsXG4gICAgICAgIHRpdGxlOiA8TSB7Li4ubWVzc2FnZXMudGl0bGV9IC8+LFxuICAgICAgICBkZXNjcmlwdGlvbjogPE0gey4uLm1lc3NhZ2VzLmRlc2NyaXB0aW9ufSAvPixcbiAgICAgICAgYWN0aW9uczogJ09LX0NBTkNFTCcsXG4gICAgICAgIG9uQ2FuY2VsLFxuICAgICAgICBvbkNvbmZpcm0sXG4gICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9ezxNIHsuLi5tZXNzYWdlcy5sYWJlbH0gLz59XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17bmV3UHJvamVjdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBlcnJvcj17IXZhbGlkfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBmcyB9IGZyb20gJ2ZpbGVyJztcbmltcG9ydCBiYXNlNjQgZnJvbSAnYmFzZTY0LWpzJztcblxuaW1wb3J0ICogYXMgaG9va3MgZnJvbSAnLi4vLi4vbWlzYy9ob29rcyc7XG5cbmltcG9ydCB7XG4gIFByb2plY3QsXG4gIHR5cGUgRmlsZXJTdGF0SW5mbyxcbiAgdHlwZSBGaWxlclJlY3Vyc2l2ZURpcmVjdG9yeUluZm8sXG59IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5pbXBvcnQge1xuICB0eXBlIENyZWF0ZVByb2plY3QsXG4gIHR5cGUgQ3JlYXRlUHJvamVjdFZhcmlhYmxlcyxcbiAgdHlwZSBQcm9qZWN0SW5wdXQsXG4gIHR5cGUgRmlsZVRyZWVGaWxlUmVjb3JkSW5wdXQsXG4gIHR5cGUgRmlsZVRyZWVUcmVlUmVjb3JkSW5wdXQsXG59IGZyb20gJy4vX19nZW5lcmF0ZWRfXy9DcmVhdGVQcm9qZWN0JztcblxuY29uc3QgdXNlQ3JlYXRlUHJvamVjdE11dGF0aW9uID0gaG9va3MubWFrZU11dGF0aW9uPENyZWF0ZVByb2plY3QsIENyZWF0ZVByb2plY3RWYXJpYWJsZXM+KGdxbGBcbiAgbXV0YXRpb24gQ3JlYXRlUHJvamVjdCgkcHJvamVjdElucHV0OiBQcm9qZWN0SW5wdXQhKSB7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0OiAkcHJvamVjdElucHV0KVxuICB9XG5gKTtcblxuYXN5bmMgZnVuY3Rpb24gcHJvamVjdFRvSW5wdXQocHJvamVjdDogUHJvamVjdCk6IFByb21pc2U8UHJvamVjdElucHV0PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIHZpc2l0RmlsZShmaWxlOiBGaWxlclN0YXRJbmZvLCBwYXRoOiBzdHJpbmdbXSk6IFByb21pc2U8RmlsZVRyZWVGaWxlUmVjb3JkSW5wdXQ+IHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGZpbGU7XG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcHJvamVjdC5yZXNvbHZlKC4uLnBhdGgpO1xuICAgIGNvbnN0IGJpbmFyeURhdGEgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIGNvbnN0IGRhdGEgPSBiYXNlNjQuZnJvbUJ5dGVBcnJheShiaW5hcnlEYXRhKTtcbiAgICByZXR1cm4geyBuYW1lLCBkYXRhIH07XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB2aXNpdERpcmVjdG9yeShcbiAgICBkaXJlY3Rvcnk6IEZpbGVyUmVjdXJzaXZlRGlyZWN0b3J5SW5mbyxcbiAgICBwYXRoOiBzdHJpbmdbXSxcbiAgKTogUHJvbWlzZTxGaWxlVHJlZVRyZWVSZWNvcmRJbnB1dD4ge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gZGlyZWN0b3J5O1xuICAgIGNvbnN0IGZpbGVQcm9taXNlczogUHJvbWlzZTxGaWxlVHJlZUZpbGVSZWNvcmRJbnB1dD5bXSA9IFtdO1xuICAgIGNvbnN0IHRyZWVQcm9taXNlczogUHJvbWlzZTxGaWxlVHJlZVRyZWVSZWNvcmRJbnB1dD5bXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGRpcmVjdG9yeS5jb250ZW50cykge1xuICAgICAgY29uc3QgY2hpbGRQYXRoID0gWy4uLnBhdGgsIGZpbGUubmFtZV07XG4gICAgICBpZiAoZmlsZS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgICAgICAgdHJlZVByb21pc2VzLnB1c2godmlzaXREaXJlY3RvcnkoZmlsZSwgY2hpbGRQYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlUHJvbWlzZXMucHVzaCh2aXNpdEZpbGUoZmlsZSwgY2hpbGRQYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgW2ZpbGVzLCB0cmVlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBQcm9taXNlLmFsbChmaWxlUHJvbWlzZXMpLFxuICAgICAgUHJvbWlzZS5hbGwodHJlZVByb21pc2VzKSxcbiAgICBdKTtcblxuICAgIHJldHVybiB7IG5hbWUsIHRyZWU6IHsgZmlsZXMsIHRyZWVzIH0gfTtcbiAgfVxuXG4gIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgY29uc3QgZmlsZXM6IEZpbGVyUmVjdXJzaXZlRGlyZWN0b3J5SW5mbyA9IGF3YWl0IHByb2plY3QuZ2V0RmlsZXMoKTtcbiAgLy8gZGlzY2FyZCB0aGUgbmFtZSwgaXQncyBub3QgcGFydCBvZiB0aGUgRmlsZVRyZWVJbnB1dFxuICBjb25zdCB7IHRyZWU6IGZpbGVUcmVlIH0gPSBhd2FpdCB2aXNpdERpcmVjdG9yeShmaWxlcywgW10pO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgIGlzUHVibGljOiB0cnVlLFxuICAgIGZpbGVUcmVlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDcmVhdGVSZW1vdGVQcm9qZWN0KCk6IChQcm9qZWN0KSA9PiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBbcGVyZm9ybUNyZWF0ZVByb2plY3QsIF9jcmVhdGVQcm9qZWN0UmVzcG9uc2VdID0gdXNlQ3JlYXRlUHJvamVjdE11dGF0aW9uKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gYXdhaXQgcHJvamVjdFRvSW5wdXQocHJvamVjdCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGVyZm9ybUNyZWF0ZVByb2plY3QoeyB2YXJpYWJsZXM6IHsgcHJvamVjdElucHV0IH0gfSk7XG5cbiAgICAvLyB3ZSdyZSBub3QgcGFzc2luZyBgaWdub3JlUmVzdWx0c2AsIHNvIHRoZXJlIHdpbGwgYmUgYSByZXN1bHRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghcmVzdWx0LmRhdGEpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICByZXR1cm4gcmVzdWx0LmRhdGEuY3JlYXRlUHJvamVjdDtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQcm9qZWN0O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgU2ltcGxlRGlhbG9nIGZyb20gJy4uLy4uL21pc2MvU2ltcGxlRGlhbG9nJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgdGl0bGU6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuY3JlYXRlX2V4ZXJjaXNlX2RpYWxvZy50aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBmb3IgdGhlIGV4ZXJjaXNlIGNyZWF0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgbmV3IGV4ZXJjaXNlJyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuY3JlYXRlX2V4ZXJjaXNlX2RpYWxvZy5kZXNjcmlwdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IGZvciB0aGUgZXhlcmNpc2UgY3JlYXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0RvIHlvdSB3YW50IHRvIHVwbG9hZCBwcm9qZWN0IFwie25hbWV9XCIgYXMgYW4gZXhlcmNpc2U/JyxcbiAgfSxcbn0pO1xuXG50eXBlIFNpbXBsZURpYWxvZ1Byb3BzID0gUmVhY3QuRWxlbWVudFByb3BzPHR5cGVvZiBTaW1wbGVEaWFsb2c+O1xuXG4vLyB0aGlzIHR5cGUgaGFzIGFsbCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGdlbmVyYXRlZCBieSBtb3VudFNpbXBsZURpYWxvZygpXG50eXBlIE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyA9ICREaWZmPFxuICBTaW1wbGVEaWFsb2dQcm9wcyxcbiAgLy8gdGhlc2UgYXJlIHRoZSBvbmVzIHRoYXQgYXJlbid0XG4gIHt8XG4gICAgaWQ6ICRQcm9wZXJ0eVR5cGU8U2ltcGxlRGlhbG9nUHJvcHMsICdpZCc+LFxuICB8fSxcbj47XG5cbnR5cGUgQ3JlYXRlUmVtb3RlUHJvamVjdERpYWxvZ0hvb2sgPSB7fFxuICBzaG93KGxvY2FsUHJvamVjdDogUHJvamVjdCk6IHZvaWQsXG4gIG1vdW50U2ltcGxlRGlhbG9nKCk6IE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyxcbnx9O1xuXG50eXBlIENvbmZpZyA9IHt8XG4gIGxvY2FsUHJvamVjdDogUHJvamVjdCxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDcmVhdGVSZW1vdGVQcm9qZWN0RGlhbG9nKFxuICBvbkNyZWF0ZTogKFByb2plY3QpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+LFxuKTogQ3JlYXRlUmVtb3RlUHJvamVjdERpYWxvZ0hvb2sge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxDb25maWcgfCBudWxsPihudWxsKTtcblxuICBmdW5jdGlvbiBzaG93KGxvY2FsUHJvamVjdDogUHJvamVjdCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0Q29uZmlnKHsgbG9jYWxQcm9qZWN0IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIW9wZW4pIHRocm93ICdkaWFsb2cgaXMgbm90IHNob3duJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmIChjb25maWcgPT09IG51bGwpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBjb25zdCB7IGxvY2FsUHJvamVjdCB9ID0gY29uZmlnO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IG9uQ3JlYXRlKGxvY2FsUHJvamVjdCk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBjb25maWc/LmxvY2FsUHJvamVjdC5uYW1lID8/ICcnO1xuXG4gIHJldHVybiB7XG4gICAgc2hvdyxcbiAgICBtb3VudFNpbXBsZURpYWxvZygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW4sXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICB0aXRsZTogPE0gey4uLm1lc3NhZ2VzLnRpdGxlfSAvPixcbiAgICAgICAgZGVzY3JpcHRpb246IDxNIHsuLi5tZXNzYWdlcy5kZXNjcmlwdGlvbn0gdmFsdWVzPXt7IG5hbWUgfX0gLz4sXG4gICAgICAgIGFjdGlvbnM6ICdPS19DQU5DRUwnLFxuICAgICAgICBvbkNhbmNlbCxcbiAgICAgICAgb25Db25maXJtLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgU2ltcGxlRGlhbG9nIGZyb20gJy4uLy4uL21pc2MvU2ltcGxlRGlhbG9nJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgdGl0bGU6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5kZWxldGVfcHJvamVjdF9kaWFsb2cudGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgZm9yIHRoZSBwcm9qZWN0IGRlbGV0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDb25maXJtIGRlbGV0aW9uJyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5kZWxldGVfcHJvamVjdF9kaWFsb2cuZGVzY3JpcHRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBmb3IgdGhlIHByb2plY3QgZGVsZXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgcHJvamVjdCBcIntuYW1lfVwiPycsXG4gIH0sXG59KTtcblxudHlwZSBTaW1wbGVEaWFsb2dQcm9wcyA9IFJlYWN0LkVsZW1lbnRQcm9wczx0eXBlb2YgU2ltcGxlRGlhbG9nPjtcblxuLy8gdGhpcyB0eXBlIGhhcyBhbGwgcHJvcGVydGllcyB0aGF0IGFyZSBnZW5lcmF0ZWQgYnkgbW91bnRTaW1wbGVEaWFsb2coKVxudHlwZSBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMgPSAkRGlmZjxcbiAgU2ltcGxlRGlhbG9nUHJvcHMsXG4gIC8vIHRoZXNlIGFyZSB0aGUgb25lcyB0aGF0IGFyZW4ndFxuICB7fFxuICAgIGlkOiAkUHJvcGVydHlUeXBlPFNpbXBsZURpYWxvZ1Byb3BzLCAnaWQnPixcbiAgfH0sXG4+O1xuXG50eXBlIERlbGV0ZVByb2plY3REaWFsb2dIb29rID0ge3xcbiAgc2hvdyhwcm9qZWN0OiBQcm9qZWN0KTogdm9pZCxcbiAgbW91bnRTaW1wbGVEaWFsb2coKTogTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzLFxufH07XG5cbnR5cGUgQ29uZmlnID0ge3xcbiAgcHJvamVjdDogUHJvamVjdCxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEZWxldGVQcm9qZWN0RGlhbG9nKFxuICBvbkRlbGV0ZTogKFByb2plY3QpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+LFxuKTogRGVsZXRlUHJvamVjdERpYWxvZ0hvb2sge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxDb25maWcgfCBudWxsPihudWxsKTtcblxuICBmdW5jdGlvbiBzaG93KHByb2plY3Q6IFByb2plY3QpIHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldENvbmZpZyh7IHByb2plY3QgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghb3BlbikgdGhyb3cgJ2RpYWxvZyBpcyBub3Qgc2hvd24nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gY29uZmlnO1xuXG4gICAgLy8gd2hldGhlciB0aGUgZGVsZXRpb24gc3VjY2VlZGVkIG9yIG5vdCwgd2Ugd2FudCB0byBoaWRlIHRoZSBkaWFsb2cuXG4gICAgLy8gVGh1cywgaWdub3JlIHRoZSByZXN1bHQgb2Ygb25EZWxldGVcbiAgICBhd2FpdCBvbkRlbGV0ZShwcm9qZWN0KTtcblxuICAgIC8vIHdlIGRvbid0IHNldCB0aGUgcHJvamVjdCB0byBudWxsIGJlY2F1c2UgdGhhdCByZXN1bHRzIGluIGEgZGlzcGxheSBnbGl0Y2g6XG4gICAgLy8gdGhlIGhpZGUgYW5pbWF0aW9uIHdpbGwgbGVhdmUgdGhlIHByb2plY3QgbmFtZSB2aXNpYmxlIGZvciBhIHNwbGl0IHNlY29uZFxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGNvbmZpZz8ucHJvamVjdC5uYW1lID8/ICcnO1xuXG4gIHJldHVybiB7XG4gICAgc2hvdyxcbiAgICBtb3VudFNpbXBsZURpYWxvZygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW4sXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICB0aXRsZTogPE0gey4uLm1lc3NhZ2VzLnRpdGxlfSAvPixcbiAgICAgICAgZGVzY3JpcHRpb246IDxNIHsuLi5tZXNzYWdlcy5kZXNjcmlwdGlvbn0gdmFsdWVzPXt7IG5hbWUgfX0gLz4sXG4gICAgICAgIGFjdGlvbnM6ICdPS19hdXRvZm9jdXNfQ0FOQ0VMJyxcbiAgICAgICAgb25DYW5jZWwsXG4gICAgICAgIG9uQ29uZmlybSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgKiBhcyBob29rcyBmcm9tICcuLi8uLi9taXNjL2hvb2tzJztcblxuaW1wb3J0IHsgdHlwZSBEZWxldGVQcm9qZWN0LCB0eXBlIERlbGV0ZVByb2plY3RWYXJpYWJsZXMgfSBmcm9tICcuL19fZ2VuZXJhdGVkX18vRGVsZXRlUHJvamVjdCc7XG5cbmNvbnN0IHVzZURlbGV0ZVByb2plY3RNdXRhdGlvbiA9IGhvb2tzLm1ha2VNdXRhdGlvbjxEZWxldGVQcm9qZWN0LCBEZWxldGVQcm9qZWN0VmFyaWFibGVzPihncWxgXG4gIG11dGF0aW9uIERlbGV0ZVByb2plY3QoJHByb2plY3RJZDogSUQhKSB7XG4gICAgZGVsZXRlUHJvamVjdEJ5SWQocHJvamVjdElkOiAkcHJvamVjdElkKVxuICB9XG5gKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVsZXRlUmVtb3RlUHJvamVjdCgpOiAoc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgW3BlcmZvcm1EZWxldGVQcm9qZWN0LCBfZGVsZXRlUHJvamVjdFJlc3BvbnNlXSA9IHVzZURlbGV0ZVByb2plY3RNdXRhdGlvbigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwZXJmb3JtRGVsZXRlUHJvamVjdCh7IHZhcmlhYmxlczogeyBwcm9qZWN0SWQgfSB9KTtcblxuICAgIC8vIHdlJ3JlIG5vdCBwYXNzaW5nIGBpZ25vcmVSZXN1bHRzYCwgc28gdGhlcmUgd2lsbCBiZSBhIHJlc3VsdFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFyZXN1bHQuZGF0YSkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIHJldHVybiByZXN1bHQuZGF0YS5kZWxldGVQcm9qZWN0QnlJZCA/PyBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRlbGV0ZVByb2plY3Q7XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVNZXNzYWdlcywgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBTaW1wbGVEaWFsb2cgZnJvbSAnLi4vLi4vbWlzYy9TaW1wbGVEaWFsb2cnO1xuXG5pbXBvcnQgeyB0eXBlIFJlbW90ZVByb2plY3QgfSBmcm9tICcuL3VzZVByb2plY3RJbmRleCc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICB0aXRsZToge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5kZWxldGVfZXhlcmNpc2VfZGlhbG9nLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZvciB0aGUgZXhlcmNpc2UgZGVsZXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NvbmZpcm0gZGVsZXRpb24nLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5kZWxldGVfZXhlcmNpc2VfZGlhbG9nLmRlc2NyaXB0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RleHQgZm9yIHRoZSBleGVyY2lzZSBkZWxldGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBleGVyY2lzZSBcIntuYW1lfVwiPycsXG4gIH0sXG59KTtcblxudHlwZSBTaW1wbGVEaWFsb2dQcm9wcyA9IFJlYWN0LkVsZW1lbnRQcm9wczx0eXBlb2YgU2ltcGxlRGlhbG9nPjtcblxuLy8gdGhpcyB0eXBlIGhhcyBhbGwgcHJvcGVydGllcyB0aGF0IGFyZSBnZW5lcmF0ZWQgYnkgbW91bnRTaW1wbGVEaWFsb2coKVxudHlwZSBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMgPSAkRGlmZjxcbiAgU2ltcGxlRGlhbG9nUHJvcHMsXG4gIC8vIHRoZXNlIGFyZSB0aGUgb25lcyB0aGF0IGFyZW4ndFxuICB7fFxuICAgIGlkOiAkUHJvcGVydHlUeXBlPFNpbXBsZURpYWxvZ1Byb3BzLCAnaWQnPixcbiAgfH0sXG4+O1xuXG50eXBlIERlbGV0ZVJlbW90ZVByb2plY3REaWFsb2dIb29rID0ge3xcbiAgc2hvdyhwcm9qZWN0OiBSZW1vdGVQcm9qZWN0KTogdm9pZCxcbiAgbW91bnRTaW1wbGVEaWFsb2coKTogTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzLFxufH07XG5cbnR5cGUgQ29uZmlnID0ge3xcbiAgcHJvamVjdDogUmVtb3RlUHJvamVjdCxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEZWxldGVSZW1vdGVQcm9qZWN0RGlhbG9nKFxuICBvbkRlbGV0ZTogKFJlbW90ZVByb2plY3QpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+LFxuKTogRGVsZXRlUmVtb3RlUHJvamVjdERpYWxvZ0hvb2sge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxDb25maWcgfCBudWxsPihudWxsKTtcblxuICBmdW5jdGlvbiBzaG93KHByb2plY3Q6IFJlbW90ZVByb2plY3QpIHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldENvbmZpZyh7IHByb2plY3QgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghb3BlbikgdGhyb3cgJ2RpYWxvZyBpcyBub3Qgc2hvd24nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gY29uZmlnO1xuXG4gICAgLy8gd2hldGhlciB0aGUgZGVsZXRpb24gc3VjY2VlZGVkIG9yIG5vdCwgd2Ugd2FudCB0byBoaWRlIHRoZSBkaWFsb2cuXG4gICAgLy8gVGh1cywgaWdub3JlIHRoZSByZXN1bHQgb2Ygb25EZWxldGVcbiAgICBhd2FpdCBvbkRlbGV0ZShwcm9qZWN0KTtcblxuICAgIC8vIHdlIGRvbid0IHNldCB0aGUgcHJvamVjdCB0byBudWxsIGJlY2F1c2UgdGhhdCByZXN1bHRzIGluIGEgZGlzcGxheSBnbGl0Y2g6XG4gICAgLy8gdGhlIGhpZGUgYW5pbWF0aW9uIHdpbGwgbGVhdmUgdGhlIHByb2plY3QgbmFtZSB2aXNpYmxlIGZvciBhIHNwbGl0IHNlY29uZFxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGNvbmZpZz8ucHJvamVjdC5uYW1lID8/ICcnO1xuXG4gIHJldHVybiB7XG4gICAgc2hvdyxcbiAgICBtb3VudFNpbXBsZURpYWxvZygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW4sXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICB0aXRsZTogPE0gey4uLm1lc3NhZ2VzLnRpdGxlfSAvPixcbiAgICAgICAgZGVzY3JpcHRpb246IDxNIHsuLi5tZXNzYWdlcy5kZXNjcmlwdGlvbn0gdmFsdWVzPXt7IG5hbWUgfX0gLz4sXG4gICAgICAgIGFjdGlvbnM6ICdPS19hdXRvZm9jdXNfQ0FOQ0VMJyxcbiAgICAgICAgb25DYW5jZWwsXG4gICAgICAgIG9uQ29uZmlybSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGJhc2U2NCBmcm9tICdiYXNlNjQtanMnO1xuaW1wb3J0IGZpbGVyLCB7IGZzIH0gZnJvbSAnZmlsZXInO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCAqIGFzIGhvb2tzIGZyb20gJy4uLy4uL21pc2MvaG9va3MnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmltcG9ydCB7XG4gIHR5cGUgUmVtb3RlUHJvamVjdENvbnRlbnQsXG4gIHR5cGUgUmVtb3RlUHJvamVjdENvbnRlbnRWYXJpYWJsZXMsXG4gIHR5cGUgUmVtb3RlUHJvamVjdENvbnRlbnRfcHJvamVjdEJ5SWQgYXMgUmVtb3RlUHJvamVjdENvbnRlbnRzLFxuICB0eXBlIFJlbW90ZVByb2plY3RDb250ZW50X3Byb2plY3RCeUlkX2ZpbGVUcmVlc19jb250ZW50cyBhcyBGaWxlVHJlZSxcbn0gZnJvbSAnLi9fX2dlbmVyYXRlZF9fL1JlbW90ZVByb2plY3RDb250ZW50JztcblxuZXhwb3J0IHR5cGUgeyBSZW1vdGVQcm9qZWN0Q29udGVudHMgfTtcblxuY29uc3QgdXNlUmVtb3RlUHJvamVjdENvbnRlbnRRdWVyeSA9IGhvb2tzLm1ha2VMYXp5UXVlcnk8XG4gIFJlbW90ZVByb2plY3RDb250ZW50LFxuICBSZW1vdGVQcm9qZWN0Q29udGVudFZhcmlhYmxlcyxcbj4oZ3FsYFxuICBxdWVyeSBSZW1vdGVQcm9qZWN0Q29udGVudCgkcHJvamVjdElkOiBJRCEpIHtcbiAgICBwcm9qZWN0QnlJZChpZDogJHByb2plY3RJZCkge1xuICAgICAgaWRcbiAgICAgIGZpbGVUcmVlUm9vdElkXG4gICAgICBmaWxlVHJlZXMge1xuICAgICAgICBpZFxuICAgICAgICBjb250ZW50cyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHR5cGVcbiAgICAgICAgICBpdGVtSWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmlsZXMge1xuICAgICAgICBpZFxuICAgICAgICBkYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG5gKTtcblxuLyoqXG4gKiBTYXZlcyBhbGwgcmVtb3RlIHByb2plY3QgY29udGVudHMgaW4gdGhlIGdpdmVuIGxvY2FsIHByb2plY3QuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3QocHJvamVjdDogUHJvamVjdCwgY29udGVudHM6IFJlbW90ZVByb2plY3RDb250ZW50cykge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICBjb25zdCBmaWxlVHJlZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoY29udGVudHMuZmlsZVRyZWVzLm1hcCgoeyBpZCwgY29udGVudHMgfSkgPT4gW2lkLCBjb250ZW50c10pKTtcbiAgY29uc3QgZmlsZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoY29udGVudHMuZmlsZXMubWFwKCh7IGlkLCBkYXRhIH0pID0+IFtpZCwgZGF0YV0pKTtcblxuICBhc3luYyBmdW5jdGlvbiB2aXNpdENoaWxkcmVuKGZpbGVUcmVlOiBGaWxlVHJlZVtdLCBwYXRoOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIGZpbGVUcmVlLm1hcChhc3luYyAoeyBuYW1lLCB0eXBlLCBpdGVtSWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwcm9qZWN0LnJlc29sdmUoLi4ucGF0aCwgbmFtZSk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ0ZJTEUnOiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZmlsZXIuQnVmZmVyLmZyb20oYmFzZTY0LnRvQnl0ZUFycmF5KGZpbGVzW2l0ZW1JZF0pKTtcbiAgICAgICAgICAgIGF3YWl0IGZzLnByb21pc2VzLndyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ1RSRUUnOiB7XG4gICAgICAgICAgICBhd2FpdCBmcy5wcm9taXNlcy5ta2RpcihhYnNvbHV0ZVBhdGgpO1xuICAgICAgICAgICAgYXdhaXQgdmlzaXRDaGlsZHJlbihmaWxlVHJlZXNbaXRlbUlkXSwgWy4uLnBhdGgsIG5hbWVdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICAgICAgICAgIHRocm93ICd1bnJlYWNoYWJsZSc7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBhd2FpdCB2aXNpdENoaWxkcmVuKGZpbGVUcmVlc1tjb250ZW50cy5maWxlVHJlZVJvb3RJZF0sIFtdKTtcbn1cblxuLyoqXG4gKiBRdWVyeSB0byBnZXQgdGhlIGNvbnRlbnRzIG9mIGEgZ2l2ZW4gcmVtb3RlIHByb2plY3QgaWRlbnRpZmllZCBieSBpdHMgcHJvamVjdElkLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcm9qZWN0Q29udGVudFF1ZXJ5KCk6IChcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4pID0+IFByb21pc2U8UmVtb3RlUHJvamVjdENvbnRlbnRzPiB7XG4gIC8vIHRoaXMgY29uc3RydWN0aW9uIGlzIHRvIGdldCBhIHJlc3VsdCBvdXQgb2YgdXNlTGF6eVF1ZXJ5IGFzIGEgcHJvbWlzZTpcbiAgLy8gd2UgYXNzdW1lIHRoZXJlIGFyZSBubyBjb25jdXJyZW50IHJlcXVlc3RzXG4gIC8vIEF0IHNvbWUgcG9pbnQsIHRoZXJlIHdpbGwgYmUgZGF0YSBmb3IgdGhlIGxhdGVzdCByZXF1ZXN0LiBXaGVuIHRoaXMgaGFwcGVucywgd2UgaGF2ZSBhbHJlYWR5XG4gIC8vIHNhdmVkIGEgcmVzb2x2ZSBjYWxsYmFjaywgc28gaW4gYW4gZWZmZWN0LCB3ZSBpbnZva2UgdGhhdCBjYWxsYmFjayB3aXRoIHRoZSBsYXRlc3QgcmVzdWx0LlxuXG4gIGNvbnN0IFtleGVjdXRlUXVlcnksIHByb2plY3RDb250ZW50UmVzcG9uc2VdID0gdXNlUmVtb3RlUHJvamVjdENvbnRlbnRRdWVyeSgpO1xuICBjb25zdCByZXNvbHZlUmVmID0gUmVhY3QudXNlUmVmPHt8XG4gICAgcHJvamVjdElkOiBzdHJpbmcsXG4gICAgcmVzb2x2ZTogKFJlbW90ZVByb2plY3RDb250ZW50cykgPT4gdm9pZCxcbiAgICByZWplY3Q6IChFcnJvcikgPT4gdm9pZCxcbiAgfH0gfCBudWxsPihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFyaWFibGVzLCBkYXRhLCBlcnJvciB9ID0gcHJvamVjdENvbnRlbnRSZXNwb25zZTtcbiAgICBpZiAoIWRhdGEgJiYgIWVycm9yKSByZXR1cm47XG5cbiAgICAvLyB3ZSBhc3N1bWUgdGhlcmUgYXJlIG5vIGNvbmN1cnJlbnQgcmVxdWVzdHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmIChyZXNvbHZlUmVmLmN1cnJlbnQgPT09IG51bGwpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBjb25zdCB7IHByb2plY3RJZCwgcmVzb2x2ZSwgcmVqZWN0IH0gPSByZXNvbHZlUmVmLmN1cnJlbnQ7XG4gICAgcmVzb2x2ZVJlZi5jdXJyZW50ID0gbnVsbDtcblxuICAgIC8vIHdlIGFzc3VtZSB0aGVyZSBhcmUgbm8gY29uY3VycmVudCByZXF1ZXN0c1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKHZhcmlhYmxlcy5wcm9qZWN0SWQgIT09IHByb2plY3RJZCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGlmIChkYXRhKSByZXNvbHZlKGRhdGEucHJvamVjdEJ5SWQpO1xuICAgIGVsc2UgaWYgKGVycm9yKSByZWplY3QoZXJyb3IpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgZWxzZSB0aHJvdyAndW5yZWFjaGFibGUnO1xuICB9LCBbcHJvamVjdENvbnRlbnRSZXNwb25zZV0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0SWQ6IHN0cmluZykge1xuICAgIC8vIHdlIGFzc3VtZSB0aGVyZSBhcmUgbm8gY29uY3VycmVudCByZXF1ZXN0c1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKHJlc29sdmVSZWYuY3VycmVudCAhPT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlUmVmLmN1cnJlbnQgPSB7IHByb2plY3RJZCwgcmVzb2x2ZSwgcmVqZWN0IH07XG4gICAgICBleGVjdXRlUXVlcnkoeyB2YXJpYWJsZXM6IHsgcHJvamVjdElkIH0gfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbG9hZFByb2plY3RDb250ZW50O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0ICogYXMgaG9va3MgZnJvbSAnLi4vLi4vbWlzYy9ob29rcyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuaW1wb3J0IHtcbiAgdHlwZSBSZW1vdGVQcm9qZWN0cyxcbiAgdHlwZSBSZW1vdGVQcm9qZWN0c19wcm9qZWN0cyBhcyBSZW1vdGVQcm9qZWN0LFxufSBmcm9tICcuL19fZ2VuZXJhdGVkX18vUmVtb3RlUHJvamVjdHMnO1xuXG5leHBvcnQgdHlwZSB7IFJlbW90ZVByb2plY3QgfTtcblxuY29uc3QgdXNlUmVtb3RlUHJvamVjdHNRdWVyeSA9IGhvb2tzLm1ha2VRdWVyeTxSZW1vdGVQcm9qZWN0cywgdm9pZD4oZ3FsYFxuICBxdWVyeSBSZW1vdGVQcm9qZWN0cyB7XG4gICAgcHJvamVjdHMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICB9XG4gIH1cbmApO1xuXG50eXBlIExvY2FsVG9SZW1vdGVJZE1hcCA9IHt8IFtwcm9qZWN0VWlkOiBzdHJpbmddOiBzdHJpbmcgfH07XG5jb25zdCB1c2VMb2NhbFRvUmVtb3RlSWRNYXAgPSBob29rcy5tYWtlTG9jYWxTdG9yYWdlPExvY2FsVG9SZW1vdGVJZE1hcD4oXG4gIChqc29uKSA9PiAoeyAuLi4oanNvbiAhPT0gbnVsbCA/IEpTT04ucGFyc2UoanNvbikgOiBudWxsKSB9KSxcbiAgKHN0YXRlKSA9PiBKU09OLnN0cmluZ2lmeShzdGF0ZSksXG4pO1xuXG4vKipcbiAqIEEgY3VycmllZCBmdW5jdGlvbiByZW1vdGVQcm9qZWN0cyA9PiBvbGRNYXAgPT4gbmV3TWFwIHRoYXQgZmlsdGVycyBvdXQgdGhvc2UgbWFwIGVudHJpZXNcbiAqIHRoYXQgZG8gbm90IHJlZmVyIHRvIGFuIGV4aXN0ZW50IHJlbW90ZSBwcm9qZWN0LlxuICovXG5mdW5jdGlvbiByZW1vdmVOb25leGlzdGVudE1hcEVudHJpZXMocmVtb3RlUHJvamVjdHM6IFJlbW90ZVByb2plY3RbXSkge1xuICByZXR1cm4gKG9sZE1hcDogTG9jYWxUb1JlbW90ZUlkTWFwKSA9PiB7XG4gICAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICAgIGNvbnN0IG9sZEVudHJpZXM6IFtzdHJpbmcsIHN0cmluZ11bXSA9IE9iamVjdC5lbnRyaWVzKG9sZE1hcCk7XG4gICAgY29uc3QgbmV3RW50cmllcyA9IG9sZEVudHJpZXMuZmxhdE1hcCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IFtfcHJvamVjdFVpZCwgcmVtb3RlSWRdID0gZW50cnk7XG5cbiAgICAgIC8vIHNraXAgYW55IGVudHJpZXMgdGhhdCByZWZlciB0byBub25leGlzdGVudCByZW1vdGUgcHJvamVjdHNcbiAgICAgIGlmIChyZW1vdGVQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHJlbW90ZUlkKSA9PT0gLTEpIHJldHVybiBbXTtcblxuICAgICAgcmV0dXJuIFtlbnRyeV07XG4gICAgfSk7XG5cbiAgICBpZiAob2xkRW50cmllcy5sZW5ndGggPT09IG5ld0VudHJpZXMubGVuZ3RoKSByZXR1cm4gb2xkTWFwO1xuXG4gICAgY29uc3QgbmV3TWFwOiBMb2NhbFRvUmVtb3RlSWRNYXAgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3RW50cmllcyk7XG4gICAgcmV0dXJuIG5ld01hcDtcbiAgfTtcbn1cblxudHlwZSBMb2NhbFRvUmVtb3RlTWFwID0ge3wgW3Byb2plY3RVaWQ6IHN0cmluZ106IFJlbW90ZVByb2plY3QgfH07XG50eXBlIFJlbW90ZVRvTG9jYWxNYXAgPSB7fCBbcmVtb3RlSWQ6IHN0cmluZ106IFByb2plY3RbXSB8fTtcbnR5cGUgUHJvamVjdEluZGV4ID0ge3xcbiAgbG9jYWxQcm9qZWN0czogUHJvamVjdFtdLFxuICByZW1vdGVQcm9qZWN0czogUmVtb3RlUHJvamVjdFtdLFxuICAvLyBtYXBzIGxvY2FsIHByb2plY3RVaWRzIG9udG8gcmVtb3RlIHByb2plY3RzXG4gIGxvY2FsVG9SZW1vdGVNYXA6IExvY2FsVG9SZW1vdGVNYXAsXG4gIC8vIG1hcHMgcmVtb3RlIHByb2plY3QgSURzIG9udG8gYSBsaXN0IG9mIGxvY2FsIHByb2plY3RzXG4gIHJlbW90ZVRvTG9jYWxNYXA6IFJlbW90ZVRvTG9jYWxNYXAsXG58fTtcblxudHlwZSBQcm9qZWN0SW5kZXhBY3Rpb24gPVxuICB8IHt8IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB8fVxuICB8IHt8IHR5cGU6ICdSRUZSRVNIX1JFTU9URScgfH1cbiAgfCB7fCB0eXBlOiAnQUREX01BUFBJTkcnLCBwcm9qZWN0VWlkOiBzdHJpbmcsIHJlbW90ZUlkOiBzdHJpbmcgfH1cbiAgfCB7fCB0eXBlOiAnUkVNT1ZFX01BUFBJTkcnLCBwcm9qZWN0VWlkOiBzdHJpbmcgfH07XG5cbi8qKlxuICogVGhlIHByb2plY3QgaW5kZXggcHJvdmlkZXMgYWxsIGxvY2FsIGFuZCByZW1vdGUgcHJvamVjdHMgYWNjZXNzaWJsZSB0byB0aGUgSURFLFxuICogYXMgd2VsbCBhcyBtYXBwaW5ncyBiZXR3ZWVuIHRob3NlLlxuICogQSBsb2NhbCAoc3RvcmVkIGluIHRoZSBicm93c2VyKSBwcm9qZWN0IGNhbiBiZSBlZGl0ZWQsXG4gKiBhbmQgc3VjaCBhIHByb2plY3QgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCB6ZXJvIG9yIG9uZSByZW1vdGUgcHJvamVjdC5cbiAqIE11bHRpcGxlIGxvY2FsIHByb2plY3RzIGNhbiByZWZlciB0byB0aGUgc2FtZSByZW1vdGUgcHJvamVjdCxcbiAqIHN1Y2ggYXMgd2hlbiBhdHRlbXB0aW5nIGFuIGV4ZXJjaXNlIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFRoaXMgaG9vayBhbGxvd3MgYWxsIHJlbGV2YW50IHByb2plY3QgbGlzdHMgYW5kIG1hcHBpbmdzLFxuICogYWxsb3dzIHJlZnJlc2hpbmcgdGhlc2UgbGlzdHMgYW5kIGVkaXRpbmcgdGhlIG1hcHBpbmdzLFxuICogYW5kIHJlbW92ZXMgc3RhbGUgbWFwcGluZ3MgaW4gdGhlIGxpZ2h0IG9mIGNoYW5nZXMgdG8gcmVtb3RlIHByb2plY3RzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcm9qZWN0SW5kZXgoKTogW1Byb2plY3RJbmRleCwgKFByb2plY3RJbmRleEFjdGlvbikgPT4gdm9pZF0ge1xuICBjb25zdCBbbG9jYWxUb1JlbW90ZUlkTWFwLCBzZXRMb2NhbFRvUmVtb3RlSWRNYXBdID0gdXNlTG9jYWxUb1JlbW90ZUlkTWFwKCdQcm9qZWN0LUluZGV4Jyk7XG4gIGNvbnN0IHJlbW90ZVByb2plY3RzUXVlcnkgPSB1c2VSZW1vdGVQcm9qZWN0c1F1ZXJ5KCk7XG4gIGNvbnN0IFtsb2NhbFByb2plY3RzLCBzZXRMb2NhbFByb2plY3RzXSA9IGhvb2tzLnVzZUFzeW5jU3RhdGU8UHJvamVjdFtdPihbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFJlbW90ZVByb2plY3RzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlbW90ZVByb2plY3RzUXVlcnkucmVmZXRjaCgpO1xuICAgIGNvbnN0IHJlbW90ZVByb2plY3RzID0gcmVzdWx0LmRhdGE/LnByb2plY3RzID8/IFtdO1xuICAgIHNldExvY2FsVG9SZW1vdGVJZE1hcChyZW1vdmVOb25leGlzdGVudE1hcEVudHJpZXMocmVtb3RlUHJvamVjdHMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbFByb2plY3RzKCkge1xuICAgIHNldExvY2FsUHJvamVjdHMoUHJvamVjdC5nZXRQcm9qZWN0cygpKTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmcmVzaExvY2FsUHJvamVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIGNhbGwgcmVtb3ZlTm9uZXhpc3RlbnRNYXBFbnRyaWVzIG9uY2UgYWZ0ZXIgcmVtb3RlIHByb2plY3RzIGhhdmUgaW5pdGlhbGx5IGxvYWRlZFxuICBjb25zdCBpbml0aWFsTG9hZFJlZiA9IFJlYWN0LnVzZVJlZjxib29sZWFuPih0cnVlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWluaXRpYWxMb2FkUmVmLmN1cnJlbnQgfHwgIXJlbW90ZVByb2plY3RzUXVlcnkuZGF0YSkgcmV0dXJuO1xuICAgIGluaXRpYWxMb2FkUmVmLmN1cnJlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlbW90ZVByb2plY3RzID0gcmVtb3RlUHJvamVjdHNRdWVyeS5kYXRhLnByb2plY3RzO1xuICAgIHNldExvY2FsVG9SZW1vdGVJZE1hcChyZW1vdmVOb25leGlzdGVudE1hcEVudHJpZXMocmVtb3RlUHJvamVjdHMpKTtcbiAgfSwgW3JlbW90ZVByb2plY3RzUXVlcnkuZGF0YV0pO1xuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbjogUHJvamVjdEluZGV4QWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnUkVGUkVTSF9MT0NBTCc6IHtcbiAgICAgICAgcmVmcmVzaExvY2FsUHJvamVjdHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FzZSAnUkVGUkVTSF9SRU1PVEUnOiB7XG4gICAgICAgIHJlZnJlc2hSZW1vdGVQcm9qZWN0cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYXNlICdBRERfTUFQUElORyc6IHtcbiAgICAgICAgY29uc3QgeyBwcm9qZWN0VWlkLCByZW1vdGVJZCB9ID0gYWN0aW9uO1xuICAgICAgICBzZXRMb2NhbFRvUmVtb3RlSWRNYXAoKG9sZE1hcCkgPT4gKHtcbiAgICAgICAgICAuLi5vbGRNYXAsXG4gICAgICAgICAgW3Byb2plY3RVaWRdOiByZW1vdGVJZCxcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYXNlICdSRU1PVkVfTUFQUElORyc6IHtcbiAgICAgICAgY29uc3QgeyBwcm9qZWN0VWlkIH0gPSBhY3Rpb247XG4gICAgICAgIHNldExvY2FsVG9SZW1vdGVJZE1hcCgoeyBbcHJvamVjdFVpZF06IF8sIC4uLm5ld01hcCB9KSA9PiBuZXdNYXApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgICAgICB0aHJvdyAndW5yZWFjaGFibGUnO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW90ZVByb2plY3RzID0gcmVtb3RlUHJvamVjdHNRdWVyeS5kYXRhPy5wcm9qZWN0cyA/PyBbXTtcbiAgY29uc3QgbG9jYWxUb1JlbW90ZU1hcDogTG9jYWxUb1JlbW90ZU1hcCA9IHt9O1xuICBjb25zdCByZW1vdGVUb0xvY2FsTWFwOiBSZW1vdGVUb0xvY2FsTWFwID0ge307XG5cbiAgZm9yIChjb25zdCBbcHJvamVjdFVpZCwgcmVtb3RlSWQwXSBvZiBPYmplY3QuZW50cmllcyhsb2NhbFRvUmVtb3RlSWRNYXApKSB7XG4gICAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICAgIGNvbnN0IHJlbW90ZUlkOiBzdHJpbmcgPSByZW1vdGVJZDA7XG5cbiAgICBjb25zdCBsb2NhbFByb2plY3QgPSBsb2NhbFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudWlkID09PSBwcm9qZWN0VWlkKTtcbiAgICBjb25zdCByZW1vdGVQcm9qZWN0ID0gcmVtb3RlUHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcmVtb3RlSWQpO1xuICAgIGlmIChsb2NhbFByb2plY3QgIT09IHVuZGVmaW5lZCAmJiByZW1vdGVQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsVG9SZW1vdGVNYXBbcHJvamVjdFVpZF0gPSByZW1vdGVQcm9qZWN0O1xuICAgICAgaWYgKCEocmVtb3RlSWQgaW4gcmVtb3RlVG9Mb2NhbE1hcCkpIHJlbW90ZVRvTG9jYWxNYXBbcmVtb3RlSWRdID0gW107XG4gICAgICByZW1vdGVUb0xvY2FsTWFwW3JlbW90ZUlkXS5wdXNoKGxvY2FsUHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgbG9jYWxQcm9qZWN0cyxcbiAgICByZW1vdGVQcm9qZWN0cyxcbiAgICBsb2NhbFRvUmVtb3RlTWFwLFxuICAgIHJlbW90ZVRvTG9jYWxNYXAsXG4gIH07XG5cbiAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cbmltcG9ydCBTaW1wbGVEaWFsb2cgZnJvbSAnLi4vLi4vbWlzYy9TaW1wbGVEaWFsb2cnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICB0aXRsZToge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLnJlbmFtZV9wcm9qZWN0X2RpYWxvZy50aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBmb3IgdGhlIHByb2plY3QgcmVuYW1lIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdSZW5hbWUgcHJvamVjdCcsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMucmVuYW1lX3Byb2plY3RfZGlhbG9nLmRlc2NyaXB0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RleHQgZm9yIHRoZSBwcm9qZWN0IHJlbmFtZSBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBsZWFzZSBlbnRlciB0aGUgcHJvamVjdCdzIG5ldyBuYW1lLlwiLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLnJlbmFtZV9wcm9qZWN0X2RpYWxvZy5uZXdfbmFtZV9sYWJlbCcsXG4gICAgZGVzY3JpcHRpb246IFwiTGFiZWwgZm9yIHRoZSBwcm9qZWN0IGNyZWF0aW9uIGRpYWxvZydzIHRleHQgZmllbGRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1Byb2plY3QgTmFtZScsXG4gIH0sXG59KTtcblxudHlwZSBTaW1wbGVEaWFsb2dQcm9wcyA9IFJlYWN0LkVsZW1lbnRQcm9wczx0eXBlb2YgU2ltcGxlRGlhbG9nPjtcblxuLy8gdGhpcyB0eXBlIGhhcyBhbGwgcHJvcGVydGllcyB0aGF0IGFyZSBnZW5lcmF0ZWQgYnkgbW91bnRTaW1wbGVEaWFsb2coKVxudHlwZSBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMgPSAkRGlmZjxcbiAgU2ltcGxlRGlhbG9nUHJvcHMsXG4gIC8vIHRoZXNlIGFyZSB0aGUgb25lcyB0aGF0IGFyZW4ndFxuICB7fFxuICAgIGlkOiAkUHJvcGVydHlUeXBlPFNpbXBsZURpYWxvZ1Byb3BzLCAnaWQnPixcbiAgfH0sXG4+O1xuXG50eXBlIFJlbmFtZVByb2plY3REaWFsb2dIb29rID0ge3xcbiAgc2hvdyhwcm9qZWN0OiBQcm9qZWN0KTogdm9pZCxcbiAgbW91bnRTaW1wbGVEaWFsb2coKTogTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzLFxufH07XG5cbnR5cGUgQ29uZmlnID0ge3xcbiAgcHJvamVjdDogUHJvamVjdCxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VSZW5hbWVQcm9qZWN0RGlhbG9nKFxuICBvblJlbmFtZTogKFByb2plY3QsIHN0cmluZykgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4sXG4gIGFsbFByb2plY3RzOiBQcm9qZWN0W10sXG4pOiBSZW5hbWVQcm9qZWN0RGlhbG9nSG9vayB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPENvbmZpZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbmV3UHJvamVjdE5hbWUsIHNldE5ld1Byb2plY3ROYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGZ1bmN0aW9uIHNob3cocHJvamVjdDogUHJvamVjdCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0Q29uZmlnKHsgcHJvamVjdCB9KTtcbiAgICBzZXROZXdQcm9qZWN0TmFtZShwcm9qZWN0Lm5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZUNsZWFuID0gbmFtZS5yZXBsYWNlKC9bXi1cXHcjJCUoKS4sOjsgXS9nLCAnJyk7XG4gICAgc2V0TmV3UHJvamVjdE5hbWUobmFtZUNsZWFuKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghb3BlbikgdGhyb3cgJ2RpYWxvZyBpcyBub3Qgc2hvd24nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gY29uZmlnO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IG9uUmVuYW1lKHByb2plY3QsIG5ld1Byb2plY3ROYW1lKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmFsaWQgPVxuICAgIG5ld1Byb2plY3ROYW1lICE9PSAnJyAmJiBhbGxQcm9qZWN0cy5ldmVyeSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lICE9PSBuZXdQcm9qZWN0TmFtZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93LFxuICAgIG1vdW50U2ltcGxlRGlhbG9nKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgdmFsaWQsXG4gICAgICAgIHRpdGxlOiA8TSB7Li4ubWVzc2FnZXMudGl0bGV9IC8+LFxuICAgICAgICBkZXNjcmlwdGlvbjogPE0gey4uLm1lc3NhZ2VzLmRlc2NyaXB0aW9ufSAvPixcbiAgICAgICAgYWN0aW9uczogJ09LX0NBTkNFTCcsXG4gICAgICAgIG9uQ2FuY2VsLFxuICAgICAgICBvbkNvbmZpcm0sXG4gICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9ezxNIHsuLi5tZXNzYWdlcy5sYWJlbH0gLz59XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17bmV3UHJvamVjdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBlcnJvcj17IXZhbGlkfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IFNpbXBsZURpYWxvZyBmcm9tICcuLi8uLi9taXNjL1NpbXBsZURpYWxvZyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIHRpdGxlOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmNyZWF0ZV9leGVyY2lzZV9kaWFsb2cudGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgZm9yIHRoZSBleGVyY2lzZSBjcmVhdGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ3JlYXRlIG5ldyBleGVyY2lzZScsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmNyZWF0ZV9leGVyY2lzZV9kaWFsb2cuZGVzY3JpcHRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBmb3IgdGhlIGV4ZXJjaXNlIGNyZWF0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdEbyB5b3Ugd2FudCB0byB1cGxvYWQgcHJvamVjdCBcIntuYW1lfVwiIGFzIGFuIGV4ZXJjaXNlPycsXG4gIH0sXG59KTtcblxudHlwZSBTaW1wbGVEaWFsb2dQcm9wcyA9IFJlYWN0LkVsZW1lbnRQcm9wczx0eXBlb2YgU2ltcGxlRGlhbG9nPjtcblxuLy8gdGhpcyB0eXBlIGhhcyBhbGwgcHJvcGVydGllcyB0aGF0IGFyZSBnZW5lcmF0ZWQgYnkgbW91bnRTaW1wbGVEaWFsb2coKVxudHlwZSBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMgPSAkRGlmZjxcbiAgU2ltcGxlRGlhbG9nUHJvcHMsXG4gIC8vIHRoZXNlIGFyZSB0aGUgb25lcyB0aGF0IGFyZW4ndFxuICB7fFxuICAgIGlkOiAkUHJvcGVydHlUeXBlPFNpbXBsZURpYWxvZ1Byb3BzLCAnaWQnPixcbiAgfH0sXG4+O1xuXG50eXBlIFNoYXJlUHJvamVjdERpYWxvZ0hvb2sgPSB7fFxuICBzaG93KGxvY2FsUHJvamVjdDogUHJvamVjdCk6IHZvaWQsXG4gIG1vdW50U2ltcGxlRGlhbG9nKCk6IE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyxcbnx9O1xuXG50eXBlIENvbmZpZyA9IHt8XG4gIGxvY2FsUHJvamVjdDogUHJvamVjdCxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTaGFyZVByb2plY3REaWFsb2coXG4gIG9uQ3JlYXRlOiAoUHJvamVjdCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4sXG4pOiBTaGFyZVByb2plY3REaWFsb2dIb29rIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8Q29uZmlnIHwgbnVsbD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gc2hvdyhsb2NhbFByb2plY3Q6IFByb2plY3QpIHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldENvbmZpZyh7IGxvY2FsUHJvamVjdCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Db25maXJtKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFvcGVuKSB0aHJvdyAnZGlhbG9nIGlzIG5vdCBzaG93bic7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoY29uZmlnID09PSBudWxsKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgY29uc3QgeyBsb2NhbFByb2plY3QgfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBvbkNyZWF0ZShsb2NhbFByb2plY3QpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBuYW1lID0gY29uZmlnPy5sb2NhbFByb2plY3QubmFtZSA/PyAnJztcblxuICByZXR1cm4ge1xuICAgIHNob3csXG4gICAgbW91bnRTaW1wbGVEaWFsb2coKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGVuLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IDxNIHsuLi5tZXNzYWdlcy50aXRsZX0gLz4sXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8TSB7Li4ubWVzc2FnZXMuZGVzY3JpcHRpb259IHZhbHVlcz17eyBuYW1lIH19IC8+LFxuICAgICAgICBhY3Rpb25zOiAnT0tfQ0FOQ0VMJyxcbiAgICAgICAgb25DYW5jZWwsXG4gICAgICAgIG9uQ29uZmlybSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCBmaWxlciwgeyBmcyB9IGZyb20gJ2ZpbGVyJztcblxuY29uc3Qgc2ggPSBuZXcgZnMuU2hlbGwoKTtcblxuLy8gZm9yIHRoZSBJREUgcmVsZXZhbnQgZmllbGRzIG9mIGZzLnN0YXQoKSByZXN1bHRzXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVyU3RhdEluZm8ge1xuICArbm9kZTogc3RyaW5nOyAvLyBpbnRlcm5hbCBub2RlIGlkICh1bmlxdWUpXG4gIC8vIGRldjogc3RyaW5nOyAvLyBmaWxlIHN5c3RlbSBuYW1lXG4gICtuYW1lOiBzdHJpbmc7IC8vIHRoZSBlbnRyeSdzIG5hbWUgKGJhc2VuYW1lKVxuICAvLyBzaXplOiBudW1iZXI7IC8vIGZpbGUgc2l6ZSBpbiBieXRlc1xuICAvLyBubGlua3M6IG51bWJlcjsgLy8gbnVtYmVyIG9mIGxpbmtzXG4gIC8vIGF0aW1lOiBkYXRlOyAvLyBsYXN0IGFjY2VzcyB0aW1lIGFzIEpTIERhdGUgT2JqZWN0XG4gIC8vIG10aW1lOiBkYXRlOyAvLyBsYXN0IG1vZGlmaWVkIHRpbWUgYXMgSlMgRGF0ZSBPYmplY3RcbiAgLy8gY3RpbWU6IGRhdGU7IC8vIGNyZWF0aW9uIHRpbWUgYXMgSlMgRGF0ZSBPYmplY3RcbiAgLy8gYXRpbWVNczogbnVtYmVyOyAvLyBsYXN0IGFjY2VzcyB0aW1lIGFzIFVuaXggVGltZXN0YW1wXG4gIC8vIG10aW1lTXM6IG51bWJlcjsgLy8gbGFzdCBtb2RpZmllZCB0aW1lIGFzIFVuaXggVGltZXN0YW1wXG4gIC8vIGN0aW1lTXM6IG51bWJlcjsgLy8gY3JlYXRpb24gdGltZSBhcyBVbml4IFRpbWVzdGFtcFxuICArdHlwZTogJ0ZJTEUnIHwgJ0RJUkVDVE9SWScgfCAnU1lNTElOSyc7IC8vIGZpbGUgdHlwZVxuICAvLyBnaWQ6IG51bWJlcjsgLy8gZ3JvdXAgbmFtZVxuICAvLyB1aWQ6IG51bWJlcjsgLy8gb3duZXIgbmFtZVxuICAvLyBtb2RlOiBudW1iZXI7IC8vIHBlcm1pc3Npb25zXG4gIC8vIHZlcnNpb246IG51bWJlcjsgLy8gdmVyc2lvbiBvZiB0aGUgbm9kZVxuXG4gIGlzRmlsZSgpOiBib29sZWFuOyAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIG5vZGUgaXMgYSBmaWxlLlxuICBpc0RpcmVjdG9yeSgpOiBib29sZWFuOyAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIG5vZGUgaXMgYSBkaXJlY3RvcnkuXG4gIC8vIGlzQmxvY2tEZXZpY2UoKTogYm9vbGVhbjsgLy8gTm90IGltcGxlbWVudGVkLCByZXR1cm5zIGZhbHNlLlxuICAvLyBpc0NoYXJhY3RlckRldmljZSgpOiBib29sZWFuOyAvLyBOb3QgaW1wbGVtZW50ZWQsIHJldHVybnMgZmFsc2UuXG4gIGlzU3ltYm9saWNMaW5rKCk6IGJvb2xlYW47IC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgbm9kZSBpcyBhIHN5bWJvbGljIGxpbmsuXG4gIC8vIGlzRklGTygpOiBib29sZWFuOyAvLyBOb3QgaW1wbGVtZW50ZWQsIHJldHVybnMgZmFsc2UuXG4gIC8vIGlzU29ja2V0KCk6IGJvb2xlYW47IC8vIE5vdCBpbXBsZW1lbnRlZCwgcmV0dXJucyBmYWxzZS5cbn1cblxuZXhwb3J0IHR5cGUgRmlsZXJSZWN1cnNpdmVEaXJlY3RvcnlJbmZvID0gRmlsZXJTdGF0SW5mbyAmIHtcbiAgLy8gY29udGVudHMgYXJlIGFkZGVkIGZvciBzaC5scygpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICArY29udGVudHM6IEZpbGVyUmVjdXJzaXZlU3RhdEluZm9bXSxcbn07XG5cbmV4cG9ydCB0eXBlIEZpbGVyUmVjdXJzaXZlU3RhdEluZm8gPSBGaWxlclJlY3Vyc2l2ZURpcmVjdG9yeUluZm8gfCBGaWxlclN0YXRJbmZvO1xuXG4vKipcbiAqIEdpdmVuIGEgZmlsZSwgcmV0dXJucyB0aGUgbmFtZWQgY2hpbGQgZmlsZS5cbiAqIFRoZSBvcGVyYXRpb24gZmFpbHMgaWYgdGhlIGdpdmVuIGZpbGUgaXMgbm90IGEgZGlyZWN0b3J5LFxuICogb3IgaWYgdGhlIG5hbWVkIGNoaWxkIGRvZXMgbm90IGV4aXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGQoZmlsZTogRmlsZXJSZWN1cnNpdmVTdGF0SW5mbywgbmFtZTogc3RyaW5nKTogRmlsZXJSZWN1cnNpdmVTdGF0SW5mbyB7XG4gIGlmICghZmlsZS5pc0RpcmVjdG9yeSgpKSB0aHJvdyBuZXcgRXJyb3IoYCcke2ZpbGUubmFtZX0nIGlzIG5vdCBhIGRpcmVjdG9yeWApO1xuICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gIGNvbnN0IGRpcmVjdG9yeTogRmlsZXJSZWN1cnNpdmVEaXJlY3RvcnlJbmZvID0gZmlsZTtcblxuICAvLyBGaW5kIHRoZSBjaGlsZCBhbmQgbWFrZSBzdXJlIGl0IGV4aXN0c1xuICBjb25zdCBjaGlsZCA9IGRpcmVjdG9yeS5jb250ZW50cy5maW5kKChmKSA9PiBmLm5hbWUgPT09IG5hbWUpO1xuICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgZG9lcyBub3QgZXhpc3RgKTtcbiAgcmV0dXJuIGNoaWxkO1xufVxuXG4vKipcbiAqIEdpdmVuIGEgZmlsZSwgcmV0dXJucyBvbmUgb2YgaXRzIGRlc2NlbmRhbnQgZmlsZXMuXG4gKiBUaGUgZmlyc3QgZnJhZ21lbnQgbXVzdCBiZSB0aGUgbmFtZSBvZiBhIGNoaWxkIG9mIHRoZSBnaXZlbiBmaWxlLFxuICogVGhlIHNlY29uZCB0aGUgbmFtZSBvZiBvbmUgb2YgdGhhdCBmaWxlJ3MgY2hpbGRyZW4gYW5kIHNvIG9uLlxuICogVGhlIG9wZXJhdGlvbiBmYWlscyBpZiBhbiBpbnRlcm1lZGlhdGUgZmlsZSBmaWxlIGlzIG5vdCBhIGRpcmVjdG9yeSxcbiAqIG9yIGlmIGEgbmFtZWQgZGVzY2VuZGFudCBkb2VzIG5vdCBleGlzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlc2NlbmRhbnQoXG4gIGZpbGU6IEZpbGVyUmVjdXJzaXZlU3RhdEluZm8sXG4gIC4uLmZyYWdtZW50czogc3RyaW5nW11cbik6IEZpbGVyUmVjdXJzaXZlU3RhdEluZm8ge1xuICByZXR1cm4gZnJhZ21lbnRzLnJlZHVjZShnZXRDaGlsZCwgZmlsZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIG5hbWUgPSAnUHJvamVjdEVycm9yJztcbn1cblxuY29uc3QgY21wRmlsZSA9IChhOiBGaWxlclN0YXRJbmZvLCBiOiBGaWxlclN0YXRJbmZvKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgLy8gc29ydCBkaXJlY3RvcmllcyBiZWZvcmUgZmlsZXMgKCYgc3ltbGlua3MpXG4gIGNvbnN0IHR5cGVWYWwgPSAoZikgPT4gKGYuaXNEaXJlY3RvcnkoKSA/IDAgOiAxKTtcbiAgcmVzdWx0ID0gdHlwZVZhbChhKSAtIHR5cGVWYWwoYik7XG4gIGlmIChyZXN1bHQgIT09IDApIHJldHVybiByZXN1bHQ7XG5cbiAgLy8gc29ydCBhbHBoYWJldGljYWxseVxuICByZXN1bHQgPSBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICBpZiAocmVzdWx0ICE9PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdWlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudWlkID0gdWlkO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldFByb2plY3RzKCk6IFByb21pc2U8UHJvamVjdFtdPiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCBzaC5wcm9taXNlcy5scygnLycpO1xuICAgIHByb2plY3RzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAoKHsgbmFtZSwgbm9kZTogdWlkIH0pID0+IG5ldyBQcm9qZWN0KG5hbWUsIHVpZCkpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldFByb2plY3QobmFtZTogc3RyaW5nKTogUHJvbWlzZTxQcm9qZWN0PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhdGggPSBmaWxlci5wYXRoLnJlc29sdmUoJy8nLCBuYW1lKTtcbiAgICAgIGNvbnN0IHsgbm9kZTogdWlkIH0gPSBhd2FpdCBmcy5wcm9taXNlcy5zdGF0KHBhdGgpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUsIHVpZCk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmIChleCBpbnN0YW5jZW9mIGZpbGVyLkVycm9ycy5FTk9FTlQpXG4gICAgICAgIHRocm93IG5ldyBQcm9qZWN0RXJyb3IoYFByb2plY3QgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVByb2plY3QobmFtZTogc3RyaW5nKTogUHJvbWlzZTxQcm9qZWN0PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhdGggPSBmaWxlci5wYXRoLnJlc29sdmUoJy8nLCBuYW1lKTtcbiAgICAgIGF3YWl0IGZzLnByb21pc2VzLm1rZGlyKHBhdGgpO1xuICAgICAgY29uc3QgeyBub2RlOiB1aWQgfSA9IGF3YWl0IGZzLnByb21pc2VzLnN0YXQocGF0aCk7XG4gICAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSwgdWlkKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKGV4IGluc3RhbmNlb2YgZmlsZXIuRXJyb3JzLkVFWElTVClcbiAgICAgICAgdGhyb3cgbmV3IFByb2plY3RFcnJvcihgUHJvamVjdCBcIiR7bmFtZX1cIiBkb2VzIGFscmVhZHkgZXhpc3RgKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZSguLi5mcmFnbWVudHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZmlsZXIucGF0aC5yZXNvbHZlKCcvJywgdGhpcy5uYW1lLCAuLi5mcmFnbWVudHMpO1xuICB9XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKCk7XG4gIH1cblxuICBhc3luYyBnZXRGaWxlcygpOiBQcm9taXNlPEZpbGVyUmVjdXJzaXZlU3RhdEluZm8+IHtcbiAgICBmdW5jdGlvbiBzb3J0UmVjdXJzaXZlbHkoZmlsZTogRmlsZXJSZWN1cnNpdmVTdGF0SW5mbykge1xuICAgICAgaWYgKCFmaWxlLmlzRGlyZWN0b3J5KCkpIHJldHVybjtcblxuICAgICAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICAgICAgY29uc3QgZGlyOiBGaWxlclJlY3Vyc2l2ZURpcmVjdG9yeUluZm8gPSBmaWxlO1xuICAgICAgZGlyLmNvbnRlbnRzLnNvcnQoY21wRmlsZSk7XG4gICAgICBkaXIuY29udGVudHMuZm9yRWFjaCgoZikgPT4gc29ydFJlY3Vyc2l2ZWx5KGYpKTtcbiAgICB9XG5cbiAgICBjb25zdCBbcm9vdCwgY29udGVudHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZnMucHJvbWlzZXMuc3RhdCh0aGlzLnBhdGgpLFxuICAgICAgc2gucHJvbWlzZXMubHModGhpcy5wYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KSxcbiAgICBdKTtcblxuICAgIHJvb3QuY29udGVudHMgPSBjb250ZW50cztcbiAgICBzb3J0UmVjdXJzaXZlbHkocm9vdCk7XG5cbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIGFzeW5jIHJlbmFtZShuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmV3UGF0aCA9IGZpbGVyLnBhdGgucmVzb2x2ZSgnLycsIG5ld05hbWUpO1xuICAgICAgYXdhaXQgZnMucHJvbWlzZXMucmVuYW1lKHRoaXMucGF0aCwgbmV3UGF0aCk7XG4gICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoZXggaW5zdGFuY2VvZiBmaWxlci5FcnJvcnMuRU5PRU5UKVxuICAgICAgICB0aHJvdyBuZXcgUHJvamVjdEVycm9yKGBQcm9qZWN0IFwiJHt0aGlzLm5hbWV9XCIgZG9lcyBubyBsb25nZXIgZXhpc3RgKTtcbiAgICAgIGlmIChleCBpbnN0YW5jZW9mIGZpbGVyLkVycm9ycy5FRVhJU1QpXG4gICAgICAgIHRocm93IG5ldyBQcm9qZWN0RXJyb3IoYFByb2plY3QgXCIke25ld05hbWV9XCIgZG9lcyBhbHJlYWR5IGV4aXN0YCk7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgLy8gdXNlIFNoZWxsLnJtIGFzIGl0IHN1cHBvcnRzIHJlY3Vyc2l2ZSByZW1vdmFsXG4gICAgICBhd2FpdCBzaC5wcm9taXNlcy5ybSh0aGlzLnBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoZXggaW5zdGFuY2VvZiBmaWxlci5FcnJvcnMuRU5PRU5UKVxuICAgICAgICB0aHJvdyBuZXcgUHJvamVjdEVycm9yKGBQcm9qZWN0IFwiJHt0aGlzLm5hbWV9XCIgZG9lcyBubyBsb25nZXIgZXhpc3RgKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQXpCQTtBQUNBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBOUVBO0FBQ0E7QUFzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7OztBQzNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBc0NBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQXNCQTtBQUNBO0FBMUJBO0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBa0NBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQXNCQTtBQUNBO0FBMUJBO0FBMkJBOzs7Ozs7OztBQ3pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQWlDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBYkE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQWlDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFiQTtBQWNBOzs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQWlDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFiQTtBQWNBOzs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFzQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBc0JBO0FBQ0E7QUExQkE7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFpQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQWJBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBRUE7QUFDQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=