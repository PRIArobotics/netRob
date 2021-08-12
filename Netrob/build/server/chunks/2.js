require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/projects/ProjectList/ProjectList.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.ProjectList-container-EbP0l {\n  margin: 0 auto;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.ProjectList-root-3QuyZ {\n  margin: 40px 0;\n  padding: 16px 8px;\n}\n\n.ProjectList-toolbar-3l19l {\n  padding-right: 16px;\n}\n\n.ProjectList-title-6g3K3 {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/ProjectList.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,oCAAoC;CACrC;;AAED;EACE,eAAe;EACf,kBAAkB;CACnB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,qBAAqB;MACjB,aAAa;CAClB","file":"ProjectList.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.root {\n  margin: 40px 0;\n  padding: 16px 8px;\n}\n\n.toolbar {\n  padding-right: 16px;\n}\n\n.title {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n"],"sourceRoot":""}]);

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/misc/SimpleDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/ProjectList.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/useCloneRemoteProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/useCreateProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/useCreateRemoteProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/useDeleteProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/useDeleteRemoteProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/useRenameProjectDialog.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/projects/ProjectList/useShareProjectDialog.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLzIuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvUHJvamVjdExpc3Quc2NzcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvbWlzYy9TaW1wbGVEaWFsb2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LnNjc3M/NmJjOCIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QvdXNlQ2xvbmVSZW1vdGVQcm9qZWN0RGlhbG9nLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VDcmVhdGVQcm9qZWN0RGlhbG9nLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VDcmVhdGVSZW1vdGVQcm9qZWN0LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VDcmVhdGVSZW1vdGVQcm9qZWN0RGlhbG9nLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VEZWxldGVQcm9qZWN0RGlhbG9nLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VEZWxldGVSZW1vdGVQcm9qZWN0LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VEZWxldGVSZW1vdGVQcm9qZWN0RGlhbG9nLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VQcm9qZWN0Q29udGVudFF1ZXJ5LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0TGlzdC91c2VQcm9qZWN0SW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L3VzZVJlbmFtZVByb2plY3REaWFsb2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L3VzZVNoYXJlUHJvamVjdERpYWxvZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvcmUvc3RvcmUvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBBcHBsaWNhdGlvbiBzcGVjaWZpY1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWhlZGdlaG9nLWdyZWVuLWxpZ2h0OiAjMzhiNDQ5O1xcbiAgLS1oZWRnZWhvZy1ncmVlbi1kYXJrOiAjMDA3YzNjO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLlByb2plY3RMaXN0LWNvbnRhaW5lci1FYlAwbCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC1yb290LTNRdXlaIHtcXG4gIG1hcmdpbjogNDBweCAwO1xcbiAgcGFkZGluZzogMTZweCA4cHg7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC10b29sYmFyLTNsMTlsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5Qcm9qZWN0TGlzdC10aXRsZS02ZzNLMyB7XFxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFLGtFQUFrRTs7RUFFbEU7O2dGQUU4RTs7RUFFOUUsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSxnQ0FBZ0M7RUFDaEMsK0JBQStCOztFQUUvQjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7Q0FDM0Q7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxxQkFBcUI7TUFDakIsYUFBYTtDQUNsQlwiLFwiZmlsZVwiOlwiUHJvamVjdExpc3Quc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogQXBwbGljYXRpb24gc3BlY2lmaWNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1oZWRnZWhvZy1ncmVlbi1saWdodDogIzM4YjQ0OTtcXG4gIC0taGVkZ2Vob2ctZ3JlZW4tZGFyazogIzAwN2MzYztcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cXG4ucm9vdCB7XFxuICBtYXJnaW46IDQwcHggMDtcXG4gIHBhZGRpbmc6IDE2cHggOHB4O1xcbn1cXG5cXG4udG9vbGJhciB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgZmxleC1ncm93OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJvamVjdExpc3QtY29udGFpbmVyLUViUDBsXCIsXG5cdFwicm9vdFwiOiBcIlByb2plY3RMaXN0LXJvb3QtM1F1eVpcIixcblx0XCJ0b29sYmFyXCI6IFwiUHJvamVjdExpc3QtdG9vbGJhci0zbDE5bFwiLFxuXHRcInRpdGxlXCI6IFwiUHJvamVjdExpc3QtdGl0bGUtNmczSzNcIlxufTsiLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4vY29tbW9uTWVzc2FnZXMnO1xuXG50eXBlIEFjdGlvbkNvbnN0YW50ID0gJ09LX0NBTkNFTCcgfCAnT0tfYXV0b2ZvY3VzX0NBTkNFTCcgfCAnT0tfQ0FOQ0VMX2F1dG9mb2N1cyc7XG5cbnR5cGUgU2ltcGxlRGlhbG9nUHJvcHMgPSB7fFxuICBpZDogc3RyaW5nLFxuICBvcGVuOiBib29sZWFuLFxuICB2YWxpZDogYm9vbGVhbixcbiAgdGl0bGU/OiBSZWFjdC5Ob2RlLFxuICBkZXNjcmlwdGlvbj86IFJlYWN0Lk5vZGUsXG4gIGFjdGlvbnM6IEFjdGlvbkNvbnN0YW50IHwgUmVhY3QuTm9kZSxcbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPixcbiAgb25Db25maXJtPzogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbnx9O1xuXG4vKipcbiAqIEEgd3JhcHBlciBmb3IgdGhlIG1hdGVyaWFsLXVpIGBEaWFsb2dgIGNvbXBvbmVudCBmb3IgZWFzeSBkaXNwbGF5IG9mIGRpYWxvZ3NcbiAqIHdpdGggdGl0bGUsIG1haW4gY29udGVudCwgYW5kIGFjdGlvbnMuXG4gKiBUaGUgY29tcG9uZW50IHRha2VzIGNhcmUgb2YgYmFzaWMgQVJJQSBhdHRyaWJ1dGVzIGZvciB0aXRsZSBhbmQgZGVzY3JpcHRpb24sXG4gKiBhbmQgZGlzcGF0Y2hlcyBjbG9zZSBhbmQgc3VibWl0IGV2ZW50cyB0byB0aGUgY2FsbGluZyBjb2RlLlxuICpcbiAqIE9uZSBvZiB0aGUgYEFjdGlvbkNvbnN0YW50YHMgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSBPSy9DYW5jZWwgYnV0dG9ucyxcbiAqIG9yIGEgY3VzdG9tIGxpc3QvZnJhZ21lbnQgb2YgYnV0dG9ucyBjYW4gYmUgcGFzc2VkLlxuICovXG5mdW5jdGlvbiBTaW1wbGVEaWFsb2coe1xuICBpZCxcbiAgb3BlbixcbiAgdmFsaWQsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYWN0aW9ucyxcbiAgb25DYW5jZWwsXG4gIG9uQ29uZmlybSxcbiAgY2hpbGRyZW4sXG59OiBTaW1wbGVEaWFsb2dQcm9wcykge1xuICBjb25zdCBjb25kaXRpb25hbFByb3BzID0ge307XG4gIGlmICh0aXRsZSAhPT0gdW5kZWZpbmVkKSBjb25kaXRpb25hbFByb3BzWydhcmlhLWxhYmVsbGVkYnknXSA9IGAke2lkfS10aXRsZWA7XG4gIGlmIChkZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSBjb25kaXRpb25hbFByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10gPSBgJHtpZH0tZGVzY3JpcHRpb25gO1xuXG4gIGxldCBhY3Rpb25zTm9kZTogUmVhY3QuTm9kZTtcbiAgc3dpdGNoIChhY3Rpb25zKSB7XG4gICAgY2FzZSAnT0tfQ0FOQ0VMJzpcbiAgICBjYXNlICdPS19hdXRvZm9jdXNfQ0FOQ0VMJzpcbiAgICBjYXNlICdPS19DQU5DRUxfYXV0b2ZvY3VzJzpcbiAgICAgIGFjdGlvbnNOb2RlID0gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsfVxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXV0b0ZvY3VzPXthY3Rpb25zID09PSAnT0tfQ0FOQ0VMX2F1dG9mb2N1cyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE0gey4uLm1lc3NhZ2VzLmNhbmNlbH0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IXZhbGlkfVxuICAgICAgICAgICAgYXV0b0ZvY3VzPXthY3Rpb25zID09PSAnT0tfYXV0b2ZvY3VzX0NBTkNFTCd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE0gey4uLm1lc3NhZ2VzLm9rfSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYWN0aW9uc05vZGUgPSBhY3Rpb25zO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKG9uQ29uZmlybSAhPT0gdW5kZWZpbmVkKSBvbkNvbmZpcm0oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtvbkNhbmNlbH0gey4uLmNvbmRpdGlvbmFsUHJvcHN9PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIHt0aXRsZSAhPT0gdW5kZWZpbmVkID8gPERpYWxvZ1RpdGxlIGlkPXtgJHtpZH0tdGl0bGVgfT57dGl0bGV9PC9EaWFsb2dUaXRsZT4gOiBudWxsfVxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICB7ZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD17YCR7aWR9LWRlc2NyaXB0aW9uYH0+e2Rlc2NyaXB0aW9ufTwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPnthY3Rpb25zTm9kZX08L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZURpYWxvZztcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCB1c2VJbnRsLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCBQb3B1cFN0YXRlLCB7IGJpbmRUcmlnZ2VyLCBiaW5kTWVudSB9IGZyb20gJ21hdGVyaWFsLXVpLXBvcHVwLXN0YXRlJztcblxuaW1wb3J0IHtcbiAgTG9jYWxQcm9qZWN0SWNvbixcbiAgVXBsb2FkRXhlcmNpc2VJY29uLFxuICBDcmVhdGVJY29uLFxuICBPcGVuSWNvbixcbiAgUmVuYW1lSWNvbixcbiAgRGVsZXRlSWNvbixcbiAgUmVmcmVzaEljb24sXG59IGZyb20gJy4uLy4uL21pc2MvcGFsZXR0ZSc7XG5cbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL21pc2MvTGluayc7XG5pbXBvcnQgU2ltcGxlRGlhbG9nIGZyb20gJy4uLy4uL21pc2MvU2ltcGxlRGlhbG9nJztcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5pbXBvcnQgcyBmcm9tICcuL1Byb2plY3RMaXN0LnNjc3MnO1xuaW1wb3J0IHVzZVNoYXJlUHJvamVjdERpYWxvZyBmcm9tICcuL3VzZVNoYXJlUHJvamVjdERpYWxvZyc7XG5pbXBvcnQgdXNlQ3JlYXRlUHJvamVjdERpYWxvZyBmcm9tICcuL3VzZUNyZWF0ZVByb2plY3REaWFsb2cnO1xuaW1wb3J0IHVzZURlbGV0ZVByb2plY3REaWFsb2cgZnJvbSAnLi91c2VEZWxldGVQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB1c2VSZW5hbWVQcm9qZWN0RGlhbG9nIGZyb20gJy4vdXNlUmVuYW1lUHJvamVjdERpYWxvZyc7XG5pbXBvcnQgdXNlQ3JlYXRlUmVtb3RlUHJvamVjdERpYWxvZyBmcm9tICcuL3VzZUNyZWF0ZVJlbW90ZVByb2plY3REaWFsb2cnO1xuaW1wb3J0IHVzZURlbGV0ZVJlbW90ZVByb2plY3REaWFsb2cgZnJvbSAnLi91c2VEZWxldGVSZW1vdGVQcm9qZWN0RGlhbG9nJztcbmltcG9ydCB1c2VDbG9uZVJlbW90ZVByb2plY3REaWFsb2cgZnJvbSAnLi91c2VDbG9uZVJlbW90ZVByb2plY3REaWFsb2cnO1xuaW1wb3J0IHVzZVByb2plY3RJbmRleCwgeyB0eXBlIFJlbW90ZVByb2plY3QgfSBmcm9tICcuL3VzZVByb2plY3RJbmRleCc7XG5pbXBvcnQgdXNlQ3JlYXRlUmVtb3RlUHJvamVjdCBmcm9tICcuL3VzZUNyZWF0ZVJlbW90ZVByb2plY3QnO1xuaW1wb3J0IHVzZURlbGV0ZVJlbW90ZVByb2plY3QgZnJvbSAnLi91c2VEZWxldGVSZW1vdGVQcm9qZWN0JztcbmltcG9ydCB1c2VQcm9qZWN0Q29udGVudFF1ZXJ5LCB7IHBvcHVsYXRlUHJvamVjdCB9IGZyb20gJy4vdXNlUHJvamVjdENvbnRlbnRRdWVyeSc7XG5cbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91c2Vycy9BdXRoUHJvdmlkZXInO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgcHJvamVjdHNUaXRsZToge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLmxpc3RfdGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgc2hvd24gYWJvdmUgdGhlIHByb2plY3QgbGlzdCcsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdZb3VyIFByb2plY3RzJyxcbiAgfSxcbiAgY3JlYXRlUHJvamVjdFRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5jcmVhdGVfcHJvamVjdF90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSBjcmVhdGUgcHJvamVjdCBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ3JlYXRlIFByb2plY3QnLFxuICB9LFxuICByZWZyZXNoUHJvamVjdExpc3RUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMucmVmcmVzaF9wcm9qZWN0X2xpc3RfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgcmVmcmVzaCBwcm9qZWN0cyBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUmVmcmVzaCBQcm9qZWN0IExpc3QnLFxuICB9LFxuICBzaGFyZVByb2plY3RUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMuc2hhcmVfcHJvamVjdF90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSBzaGFyZSBwcm9qZWN0IGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdTaGFyZSBQcm9qZWN0IFwie25hbWV9XCInLFxuICB9LFxuICByZW5hbWVQcm9qZWN0VG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLnJlbmFtZV9wcm9qZWN0X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBhbmQgc2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIHJlbmFtZSBwcm9qZWN0IGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdSZW5hbWUgUHJvamVjdCBcIntuYW1lfVwiJyxcbiAgfSxcbiAgZGVsZXRlUHJvamVjdFRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5kZWxldGVfcHJvamVjdF90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSBkZWxldGUgcHJvamVjdCBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnRGVsZXRlIFByb2plY3QgXCJ7bmFtZX1cIicsXG4gIH0sXG4gIGV4ZXJjaXNlc1RpdGxlOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmxpc3RfdGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgc2hvd24gYWJvdmUgdGhlIGV4ZXJjaXNlcyBsaXN0JyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1JlbW90ZSBQcm9qZWt0cycsXG4gIH0sXG4gIHJlZnJlc2hFeGVyY2lzZUxpc3RUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLnJlZnJlc2hfZXhlcmNpc2VfbGlzdF90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSByZWZyZXNoIGV4ZXJjaXNlcyBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUmVmcmVzaCBFeGVyY2lzZSBMaXN0JyxcbiAgfSxcbiAgZXhlcmNpc2VTZWNvbmRhcnlUZXh0OiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLnNlY29uZGFyeV90ZXh0JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgdGV4dCBpcyBzaG93biBiZWxvdyB0aGUgZXhlcmNpc2UgbmFtZSBhbmQgZGVzY3JpYmVzIGl0IGZ1cnRoZXInLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnRGlmZmljdWx0eToge2xldmVsfScsXG4gIH0sXG4gIHVwbG9hZEV4ZXJjaXNlVG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy51cGxvYWRfZXhlcmNpc2VfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgdXBsb2FkIGV4ZXJjaXNlIGJ1dHRvbicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdVcGxvYWQgcHJvamVjdCBcIntuYW1lfVwiIGFzIGFuIGV4ZXJjaXNlJyxcbiAgfSxcbiAgY2xvbmVFeGVyY2lzZVRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuY2xvbmVfZXhlcmNpc2VfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgY2xvbmUgZXhlcmNpc2UgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NyZWF0ZSBuZXcgcHJvamVjdCB0byB3b3JrIG9uIGV4ZXJjaXNlIFwie25hbWV9XCInLFxuICB9LFxuICBvcGVuQXNzb2NpYXRlZFByb2plY3RUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLm9wZW5fYXNzb2NpYXRlZF9wcm9qZWN0X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgb3BlbiBwcm9qZWN0IGJ1dHRvbi4gVGhhdCBidXR0b24gaXMgc2hvd24gaWYgdGhlcmUncyBleGFjdGx5IG9uZSBhc3NvY2lhdGVkIHByb2plY3QuXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdPcGVuIHByb2plY3QgXCJ7bmFtZX1cIiB0byB3b3JrIG9uIGV4ZXJjaXNlIFwie2V4ZXJjaXNlfVwiJyxcbiAgfSxcbiAgb3BlbkFzc29jaWF0ZWRQcm9qZWN0TWVudVRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMub3Blbl9hc3NvY2lhdGVkX3Byb2plY3RfbWVudV90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgb3BlbiBwcm9qZWN0IG1lbnUgYnV0dG9uLiBUaGF0IGJ1dHRvbiBpcyBzaG93biBpZiB0aGVyZSBhcmUgdHdvIG9yIG1vcmUgYXNzb2NpYXRlZCBwcm9qZWN0cy4nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnT3BlbiBhbiBleGlzdGluZyBwcm9qZWN0IHRvIHdvcmsgb24gZXhlcmNpc2UgXCJ7ZXhlcmNpc2V9XCInLFxuICB9LFxuICBvcGVuQXNzb2NpYXRlZFByb2plY3RNZW51SXRlbToge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5vcGVuX2Fzc29jaWF0ZWRfcHJvamVjdF9tZW51X2l0ZW0nLFxuICAgIGRlc2NyaXB0aW9uOiAndGV4dCBmb3IgdGhlIG1lbnUgaXRlbXMgaW4gdGhlIGFzc29jaWF0ZWQgcHJvamVjdHMgbWVudS4nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnT3BlbiBwcm9qZWN0IFwie25hbWV9XCInLFxuICB9LFxuICBlZGl0RXhlcmNpc2VUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmVkaXRfZXhlcmNpc2VfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGFuZCBzY3JlZW4gcmVhZGVyIGxhYmVsIGZvciB0aGUgZWRpdCBleGVyY2lzZSBidXR0b24nLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnRWRpdCBFeGVyY2lzZSBcIntuYW1lfVwiJyxcbiAgfSxcbiAgZGVsZXRlRXhlcmNpc2VUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmRlbGV0ZV9leGVyY2lzZV90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgYW5kIHNjcmVlbiByZWFkZXIgbGFiZWwgZm9yIHRoZSBkZWxldGUgZXhlcmNpc2UgYnV0dG9uJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0RlbGV0ZSBFeGVyY2lzZSBcIntuYW1lfVwiJyxcbiAgfSxcbn0pO1xuXG50eXBlIFByb3BzID0ge3x8fTtcblxuLyoqXG4gKiBUaGUgUHJvamVjdExpc3QgY29tcG9uZW50IGhhcyB0d28gcHVycG9zZXM6XG4gKiBzaG93IGEgbGlzdCBvZiBsb2NhbCBwcm9qZWN0cyAoc3RvcmVkIGluIHRoZSBcImZpbGVyXCIgYnJvd3NlciBmaWxlIHN5c3RlbSksXG4gKiBhbmQgc2hvdyBhIGxpc3Qgb2YgcmVtb3RlIHByb2plY3RzIChhY2Nlc3NlZCB2aWEgR3JhcGhRTCkuXG4gKiBUaGUgY29tcG9uZW50IGFsbG93cyBtYW5hZ2luZyBsb2NhbCBwcm9qZWN0cyBhbmQsIGZvciBsb2dnZWQgaW4gdXNlcnMsIHJlbW90ZSBwcm9qZWN0cyBhcyB3ZWxsLlxuICovXG5mdW5jdGlvbiBQcm9qZWN0TGlzdChfcHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGludGwgPSB1c2VJbnRsKCk7XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdE11dGF0aW9uID0gdXNlQ3JlYXRlUmVtb3RlUHJvamVjdCgpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0TXV0YXRpb24gPSB1c2VEZWxldGVSZW1vdGVQcm9qZWN0KCk7XG4gIGNvbnN0IGxvYWRQcm9qZWN0Q29udGVudCA9IHVzZVByb2plY3RDb250ZW50UXVlcnkoKTtcblxuICBjb25zdCBbXG4gICAgeyBsb2NhbFByb2plY3RzLCByZW1vdGVQcm9qZWN0cywgbG9jYWxUb1JlbW90ZU1hcCwgcmVtb3RlVG9Mb2NhbE1hcCB9LFxuICAgIHByb2plY3RJbmRleERpc3BhdGNoLFxuICBdID0gdXNlUHJvamVjdEluZGV4KCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybUNyZWF0ZVByb2plY3QobmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFByb2plY3QuY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmICghKGV4IGluc3RhbmNlb2YgUHJvamVjdEVycm9yKSkgdGhyb3cgZXg7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSB1c2VDcmVhdGVQcm9qZWN0RGlhbG9nKGNvbmZpcm1DcmVhdGVQcm9qZWN0LCBsb2NhbFByb2plY3RzKTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25maXJtRGVsZXRlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHByb2plY3QuZGVsZXRlKCk7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfTUFQUElORycsIHByb2plY3RVaWQ6IHByb2plY3QudWlkIH0pO1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKCEoZXggaW5zdGFuY2VvZiBQcm9qZWN0RXJyb3IpKSB0aHJvdyBleDtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSB1c2VEZWxldGVQcm9qZWN0RGlhbG9nKGNvbmZpcm1EZWxldGVQcm9qZWN0KTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25maXJtUmVuYW1lUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcHJvamVjdC5yZW5hbWUobmV3TmFtZSk7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7IHR5cGU6ICdSRUZSRVNIX0xPQ0FMJyB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoIShleCBpbnN0YW5jZW9mIFByb2plY3RFcnJvcikpIHRocm93IGV4O1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXJlUHJvamVjdCA9IHVzZVNoYXJlUHJvamVjdERpYWxvZyhjb25maXJtU2hhcmVQcm9qZWN0LGxvY2FsUHJvamVjdHMpXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1TaGFyZVByb2plY3QobG9jYWxQcm9qZWN0OiBQcm9qZWN0KTogUHJvbWlzZSA8Ym9vb2xlYW4+e1xuICAgIGNvbnN0IGlkID0gYXdhaXQgY3JlYXRlUHJvamVjdE11YXRpb24obG9jYWxQcm9qZWN0KTtcbiAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7XG4gICAgICB0eXBlOidBZGRfTUFQUElORycsXG4gICAgICBwcm9qZWN0VWlkOiBsb2NhbFByb2plY3QudWlkLFxuICAgICAgcmVtb3RlSWQ6IGlkLCBcbiAgICB9KTtcbiAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7dHlwZTogJ1JFRlJFU0hfUkVNT1RFJ30pXG4gICAgcmV0dXJuIHRydWU7IFxuICB9XG4gIGNvbnN0IHJlbmFtZVByb2plY3QgPSB1c2VSZW5hbWVQcm9qZWN0RGlhbG9nKGNvbmZpcm1SZW5hbWVQcm9qZWN0LCBsb2NhbFByb2plY3RzKTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25maXJtQ3JlYXRlUmVtb3RlUHJvamVjdChsb2NhbFByb2plY3Q6IFByb2plY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBpZCA9IGF3YWl0IGNyZWF0ZVByb2plY3RNdXRhdGlvbihsb2NhbFByb2plY3QpO1xuICAgIHByb2plY3RJbmRleERpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdBRERfTUFQUElORycsXG4gICAgICBwcm9qZWN0VWlkOiBsb2NhbFByb2plY3QudWlkLFxuICAgICAgcmVtb3RlSWQ6IGlkLFxuICAgIH0pO1xuICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfUkVNT1RFJyB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVJlbW90ZVByb2plY3QgPSB1c2VDcmVhdGVSZW1vdGVQcm9qZWN0RGlhbG9nKGNvbmZpcm1DcmVhdGVSZW1vdGVQcm9qZWN0KTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25maXJtRGVsZXRlUmVtb3RlUHJvamVjdChwcm9qZWN0OiBSZW1vdGVQcm9qZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgYXdhaXQgZGVsZXRlUHJvamVjdE11dGF0aW9uKHByb2plY3QuaWQpO1xuICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfUkVNT1RFJyB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVJlbW90ZVByb2plY3QgPSB1c2VEZWxldGVSZW1vdGVQcm9qZWN0RGlhbG9nKGNvbmZpcm1EZWxldGVSZW1vdGVQcm9qZWN0KTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25maXJtQ2xvbmVSZW1vdGVQcm9qZWN0KHByb2plY3Q6IFJlbW90ZVByb2plY3QsIG5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCBjb250ZW50O1xuICAgIHRyeSB7XG4gICAgICBjb250ZW50ID0gYXdhaXQgbG9hZFByb2plY3RDb250ZW50KHByb2plY3QuaWQpO1xuICAgIH0gY2F0Y2ggKF9leCkge1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9SRU1PVEUnIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2FsUHJvamVjdCA9IGF3YWl0IFByb2plY3QuY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgIGF3YWl0IHBvcHVsYXRlUHJvamVjdChsb2NhbFByb2plY3QsIGNvbnRlbnQpO1xuICAgICAgcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSk7XG4gICAgICBwcm9qZWN0SW5kZXhEaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdBRERfTUFQUElORycsXG4gICAgICAgIHByb2plY3RVaWQ6IGxvY2FsUHJvamVjdC51aWQsXG4gICAgICAgIHJlbW90ZUlkOiBwcm9qZWN0LmlkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKCEoZXggaW5zdGFuY2VvZiBQcm9qZWN0RXJyb3IpKSB0aHJvdyBleDtcbiAgICAgIHByb2plY3RJbmRleERpc3BhdGNoKHsgdHlwZTogJ1JFRlJFU0hfTE9DQUwnIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb25lUmVtb3RlUHJvamVjdCA9IHVzZUNsb25lUmVtb3RlUHJvamVjdERpYWxvZyhjb25maXJtQ2xvbmVSZW1vdGVQcm9qZWN0LCBsb2NhbFByb2plY3RzKTtcblxuICBjb25zdCBpc0xvZ2dlZEluID0gISFhdXRoLmF1dGhEYXRhO1xuXG4gIHVzZVN0eWxlcyhzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e3MudG9vbGJhcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzLnRpdGxlfSB2YXJpYW50PVwiaDVcIiBub1dyYXA+XG4gICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMucHJvamVjdHNUaXRsZX0gLz5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jcmVhdGVQcm9qZWN0VG9vbHRpcCl9IHBsYWNlbWVudD1cImJvdHRvbVwiPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNyZWF0ZVByb2plY3RUb29sdGlwKX1cbiAgICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlUHJvamVjdC5zaG93fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q3JlYXRlSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZWZyZXNoUHJvamVjdExpc3RUb29sdGlwKX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZWZyZXNoUHJvamVjdExpc3RUb29sdGlwKX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZWZyZXNoSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8TGlzdD5cbiAgICAgICAgICB7bG9jYWxQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e3Byb2plY3QubmFtZX0gYnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89e2AvcHJvamVjdHMvJHtwcm9qZWN0Lm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPExvY2FsUHJvamVjdEljb24gLz5cbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9qZWN0Lm5hbWV9IC8+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMudXBsb2FkRXhlcmNpc2VUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMudXBsb2FkRXhlcmNpc2VUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2plY3QudWlkIGluIGxvY2FsVG9SZW1vdGVNYXB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY3JlYXRlUmVtb3RlUHJvamVjdC5zaG93KHByb2plY3QpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZEV4ZXJjaXNlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVuYW1lUHJvamVjdFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZW5hbWVQcm9qZWN0VG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbmFtZVByb2plY3Quc2hvdyhwcm9qZWN0KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFJlbmFtZUljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGVsZXRlUHJvamVjdFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGVsZXRlUHJvamVjdFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQcm9qZWN0LnNob3cocHJvamVjdCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgICA8U2ltcGxlRGlhbG9nIGlkPVwiY3JlYXRlLWRpYWxvZ1wiIHsuLi5jcmVhdGVQcm9qZWN0Lm1vdW50U2ltcGxlRGlhbG9nKCl9IC8+XG4gICAgICAgIDxTaW1wbGVEaWFsb2cgaWQ9XCJzaGFyZS1kaWFsb2dcIiB7Li4uc2hhcmVQcm9qZWN0Lm1vdW50U2ltcGxlRGlhbG9nKCl9IC8+XG4gICAgICAgIDxTaW1wbGVEaWFsb2cgaWQ9XCJkZWxldGUtZGlhbG9nXCIgey4uLmRlbGV0ZVByb2plY3QubW91bnRTaW1wbGVEaWFsb2coKX0gLz5cbiAgICAgICAgPFNpbXBsZURpYWxvZyBpZD1cInJlbmFtZS1kaWFsb2dcIiB7Li4ucmVuYW1lUHJvamVjdC5tb3VudFNpbXBsZURpYWxvZygpfSAvPlxuICAgICAgICA8U2ltcGxlRGlhbG9nIGlkPVwiY3JlYXRlLXJlbW90ZS1kaWFsb2dcIiB7Li4uY3JlYXRlUmVtb3RlUHJvamVjdC5tb3VudFNpbXBsZURpYWxvZygpfSAvPlxuICAgICAgPC9QYXBlcj5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17cy50b29sYmFyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3MudGl0bGV9IHZhcmlhbnQ9XCJoNVwiIG5vV3JhcD5cbiAgICAgICAgICAgIDxNIHsuLi5tZXNzYWdlcy5leGVyY2lzZXNUaXRsZX0gLz5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVmcmVzaEV4ZXJjaXNlTGlzdFRvb2x0aXApfVxuICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJlZnJlc2hFeGVyY2lzZUxpc3RUb29sdGlwKX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvamVjdEluZGV4RGlzcGF0Y2goeyB0eXBlOiAnUkVGUkVTSF9SRU1PVEUnIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmVmcmVzaEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3JlbW90ZVByb2plY3RzLm1hcCgoZXhlcmNpc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc29jaWF0ZWRQcm9qZWN0cyA9IHJlbW90ZVRvTG9jYWxNYXBbZXhlcmNpc2UuaWRdID8/IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBoYXNPcGVuQ29tbWFuZCA9IGFzc29jaWF0ZWRQcm9qZWN0cy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY29uc3QgaGFzT3BlblBvcHVwID0gYXNzb2NpYXRlZFByb2plY3RzLmxlbmd0aCA+IDE7XG4gICAgICAgICAgICBjb25zdCBoYXNBZG1pbkNvbW1hbmRzID0gaXNMb2dnZWRJbjtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17ZXhlcmNpc2UuaWR9IGJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxQcm9qZWN0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtleGVyY2lzZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgLy8gc2Vjb25kYXJ5PXtpbnRsLmZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAvLyAgIG1lc3NhZ2VzLmV4ZXJjaXNlU2Vjb25kYXJ5VGV4dCxcbiAgICAgICAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgICAgICAgLy8gICAgIC4uLmV4ZXJjaXNlLFxuICAgICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgICAgLy8gKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuY2xvbmVFeGVyY2lzZVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uKCFoYXNPcGVuQ29tbWFuZCA/IHsgZWRnZTogJ2VuZCcgfSA6IHt9KX1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuY2xvbmVFeGVyY2lzZVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvbmVSZW1vdGVQcm9qZWN0LnNob3coZXhlcmNpc2UpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgeyFoYXNPcGVuQ29tbWFuZCA/IG51bGwgOiAhaGFzT3BlblBvcHVwID8gKFxuICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGVkUHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5vcGVuQXNzb2NpYXRlZFByb2plY3RUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLighaGFzQWRtaW5Db21tYW5kcyA/IHsgZWRnZTogJ2VuZCcgfSA6IHt9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm9wZW5Bc3NvY2lhdGVkUHJvamVjdFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL3Byb2plY3RzLyR7cHJvamVjdC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3B1cFN0YXRlIHZhcmlhbnQ9XCJwb3BvdmVyXCIgcG9wdXBJZD17YCR7ZXhlcmNpc2UubmFtZX0tbWVudWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHsocG9wdXBTdGF0ZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm9wZW5Bc3NvY2lhdGVkUHJvamVjdE1lbnVUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4oIWhhc0FkbWluQ29tbWFuZHMgPyB7IGVkZ2U6ICdlbmQnIH0gOiB7fSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uYmluZFRyaWdnZXIocG9wdXBTdGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLm9wZW5Bc3NvY2lhdGVkUHJvamVjdE1lbnVUb29sdGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGV4ZXJjaXNlOiBleGVyY2lzZS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmJpbmRNZW51KHBvcHVwU3RhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc29jaWF0ZWRQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9wcm9qZWN0cy8ke3Byb2plY3QubmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5tZXNzYWdlcy5vcGVuQXNzb2NpYXRlZFByb2plY3RNZW51SXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3sgbmFtZTogcHJvamVjdC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1BvcHVwU3RhdGU+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgeyFoYXNBZG1pbkNvbW1hbmRzID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5lZGl0RXhlcmNpc2VUb29sdGlwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmVkaXRFeGVyY2lzZVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBleGVyY2lzZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gLi4ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVuYW1lSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kZWxldGVFeGVyY2lzZVRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXhlcmNpc2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRlbGV0ZUV4ZXJjaXNlVG9vbHRpcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGV4ZXJjaXNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVSZW1vdGVQcm9qZWN0LnNob3coZXhlcmNpc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDxTaW1wbGVEaWFsb2cgaWQ9XCJjbG9uZS1yZW1vdGUtZGlhbG9nXCIgey4uLmNsb25lUmVtb3RlUHJvamVjdC5tb3VudFNpbXBsZURpYWxvZygpfSAvPlxuICAgICAgICA8U2ltcGxlRGlhbG9nIGlkPVwiZGVsZXRlLXJlbW90ZS1kaWFsb2dcIiB7Li4uZGVsZXRlUmVtb3RlUHJvamVjdC5tb3VudFNpbXBsZURpYWxvZygpfSAvPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7XG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL1Byb2plY3RMaXN0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9Qcm9qZWN0TGlzdC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9Qcm9qZWN0TGlzdC5zY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5pbXBvcnQgU2ltcGxlRGlhbG9nIGZyb20gJy4uLy4uL21pc2MvU2ltcGxlRGlhbG9nJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuaW1wb3J0IHsgdHlwZSBSZW1vdGVQcm9qZWN0IH0gZnJvbSAnLi91c2VQcm9qZWN0SW5kZXgnO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgdGl0bGU6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuY2xvbmVfZXhlcmNpc2VfZGlhbG9nLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZvciB0aGUgZXhlcmNpc2UgY2xvbmluZyBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ3JlYXRlIG5ldyBwcm9qZWN0JyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuY2xvbmVfZXhlcmNpc2VfZGlhbG9nLmRlc2NyaXB0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RleHQgZm9yIHRoZSBleGVyY2lzZSBjbG9uaW5nIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdGhlIHByb2plY3QgbmFtZSBmb3Igd29ya2luZyBvbiBleGVyY2lzZSBcIntuYW1lfVwiLicsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmNsb25lX2V4ZXJjaXNlX2RpYWxvZy5uZXdfbmFtZV9sYWJlbCcsXG4gICAgZGVzY3JpcHRpb246IFwiTGFiZWwgZm9yIHRoZSBleGVyY2lzZSBjbG9uaW5nIGRpYWxvZydzIHRleHQgZmllbGRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1Byb2plY3QgTmFtZScsXG4gIH0sXG59KTtcblxudHlwZSBTaW1wbGVEaWFsb2dQcm9wcyA9IFJlYWN0LkVsZW1lbnRQcm9wczx0eXBlb2YgU2ltcGxlRGlhbG9nPjtcblxuLy8gdGhpcyB0eXBlIGhhcyBhbGwgcHJvcGVydGllcyB0aGF0IGFyZSBnZW5lcmF0ZWQgYnkgbW91bnRTaW1wbGVEaWFsb2coKVxudHlwZSBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMgPSAkRGlmZjxcbiAgU2ltcGxlRGlhbG9nUHJvcHMsXG4gIC8vIHRoZXNlIGFyZSB0aGUgb25lcyB0aGF0IGFyZW4ndFxuICB7fFxuICAgIGlkOiAkUHJvcGVydHlUeXBlPFNpbXBsZURpYWxvZ1Byb3BzLCAnaWQnPixcbiAgfH0sXG4+O1xuXG50eXBlIENsb25lUmVtb3RlUHJvamVjdERpYWxvZ0hvb2sgPSB7fFxuICBzaG93KHByb2plY3Q6IFJlbW90ZVByb2plY3QpOiB2b2lkLFxuICBtb3VudFNpbXBsZURpYWxvZygpOiBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMsXG58fTtcblxudHlwZSBDb25maWcgPSB7fFxuICBwcm9qZWN0OiBSZW1vdGVQcm9qZWN0LFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNsb25lUmVtb3RlUHJvamVjdERpYWxvZyhcbiAgb25DcmVhdGU6IChwcm9qZWN0OiBSZW1vdGVQcm9qZWN0LCBuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+LFxuICBhbGxQcm9qZWN0czogUHJvamVjdFtdLFxuKTogQ2xvbmVSZW1vdGVQcm9qZWN0RGlhbG9nSG9vayB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPENvbmZpZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbmV3UHJvamVjdE5hbWUsIHNldE5ld1Byb2plY3ROYW1lXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGZ1bmN0aW9uIHNob3cocHJvamVjdDogUmVtb3RlUHJvamVjdCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0Q29uZmlnKHsgcHJvamVjdCB9KTtcbiAgICBzZXROZXdQcm9qZWN0TmFtZSgnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lQ2xlYW4gPSBuYW1lLnJlcGxhY2UoL1teLVxcdyMkJSgpLiw6OyBdL2csICcnKTtcbiAgICBzZXROZXdQcm9qZWN0TmFtZShuYW1lQ2xlYW4pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Db25maXJtKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFvcGVuKSB0aHJvdyAnZGlhbG9nIGlzIG5vdCBzaG93bic7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoY29uZmlnID09PSBudWxsKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgY29uc3QgeyBwcm9qZWN0IH0gPSBjb25maWc7XG5cbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgb25DcmVhdGUocHJvamVjdCwgbmV3UHJvamVjdE5hbWUpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB2YWxpZCA9XG4gICAgbmV3UHJvamVjdE5hbWUgIT09ICcnICYmIGFsbFByb2plY3RzLmV2ZXJ5KChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgIT09IG5ld1Byb2plY3ROYW1lKTtcblxuICBjb25zdCBuYW1lID0gY29uZmlnPy5wcm9qZWN0Lm5hbWUgPz8gJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93LFxuICAgIG1vdW50U2ltcGxlRGlhbG9nKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgdmFsaWQsXG4gICAgICAgIHRpdGxlOiA8TSB7Li4ubWVzc2FnZXMudGl0bGV9IC8+LFxuICAgICAgICBkZXNjcmlwdGlvbjogPE0gey4uLm1lc3NhZ2VzLmRlc2NyaXB0aW9ufSB2YWx1ZXM9e3sgbmFtZSB9fSAvPixcbiAgICAgICAgYWN0aW9uczogJ09LX0NBTkNFTCcsXG4gICAgICAgIG9uQ2FuY2VsLFxuICAgICAgICBvbkNvbmZpcm0sXG4gICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9ezxNIHsuLi5tZXNzYWdlcy5sYWJlbH0gLz59XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17bmV3UHJvamVjdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBlcnJvcj17IXZhbGlkfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5pbXBvcnQgU2ltcGxlRGlhbG9nIGZyb20gJy4uLy4uL21pc2MvU2ltcGxlRGlhbG9nJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgdGl0bGU6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5jcmVhdGVfcHJvamVjdF9kaWFsb2cudGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgZm9yIHRoZSBwcm9qZWN0IGNyZWF0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDcmVhdGUgbmV3IHByb2plY3QnLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLmNyZWF0ZV9wcm9qZWN0X2RpYWxvZy5kZXNjcmlwdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IGZvciB0aGUgcHJvamVjdCBjcmVhdGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiBcIlBsZWFzZSBlbnRlciB0aGUgbmV3IHByb2plY3QncyBuYW1lLlwiLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLmNyZWF0ZV9wcm9qZWN0X2RpYWxvZy5uZXdfbmFtZV9sYWJlbCcsXG4gICAgZGVzY3JpcHRpb246IFwiTGFiZWwgZm9yIHRoZSBwcm9qZWN0IGNyZWF0aW9uIGRpYWxvZydzIHRleHQgZmllbGRcIixcbiAgICBkZWZhdWx0TWVzc2FnZTogJ1Byb2plY3QgTmFtZScsXG4gIH0sXG59KTtcblxudHlwZSBTaW1wbGVEaWFsb2dQcm9wcyA9IFJlYWN0LkVsZW1lbnRQcm9wczx0eXBlb2YgU2ltcGxlRGlhbG9nPjtcblxuLy8gdGhpcyB0eXBlIGhhcyBhbGwgcHJvcGVydGllcyB0aGF0IGFyZSBnZW5lcmF0ZWQgYnkgbW91bnRTaW1wbGVEaWFsb2coKVxudHlwZSBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMgPSAkRGlmZjxcbiAgU2ltcGxlRGlhbG9nUHJvcHMsXG4gIC8vIHRoZXNlIGFyZSB0aGUgb25lcyB0aGF0IGFyZW4ndFxuICB7fFxuICAgIGlkOiAkUHJvcGVydHlUeXBlPFNpbXBsZURpYWxvZ1Byb3BzLCAnaWQnPixcbiAgfH0sXG4+O1xuXG50eXBlIENyZWF0ZVByb2plY3REaWFsb2dIb29rID0ge3xcbiAgc2hvdygpOiB2b2lkLFxuICBtb3VudFNpbXBsZURpYWxvZygpOiBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ3JlYXRlUHJvamVjdERpYWxvZyhcbiAgb25DcmVhdGU6IChzdHJpbmcpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+LFxuICBhbGxQcm9qZWN0czogUHJvamVjdFtdLFxuKTogQ3JlYXRlUHJvamVjdERpYWxvZ0hvb2sge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtuZXdQcm9qZWN0TmFtZSwgc2V0TmV3UHJvamVjdE5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldE5ld1Byb2plY3ROYW1lKCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWVDbGVhbiA9IG5hbWUucmVwbGFjZSgvW14tXFx3IyQlKCkuLDo7IF0vZywgJycpO1xuICAgIHNldE5ld1Byb2plY3ROYW1lKG5hbWVDbGVhbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIW9wZW4pIHRocm93ICdkaWFsb2cgaXMgbm90IHNob3duJztcblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBvbkNyZWF0ZShuZXdQcm9qZWN0TmFtZSk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbGlkID1cbiAgICBuZXdQcm9qZWN0TmFtZSAhPT0gJycgJiYgYWxsUHJvamVjdHMuZXZlcnkoKHByb2plY3QpID0+IHByb2plY3QubmFtZSAhPT0gbmV3UHJvamVjdE5hbWUpO1xuXG4gIHJldHVybiB7XG4gICAgc2hvdyxcbiAgICBtb3VudFNpbXBsZURpYWxvZygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW4sXG4gICAgICAgIHZhbGlkLFxuICAgICAgICB0aXRsZTogPE0gey4uLm1lc3NhZ2VzLnRpdGxlfSAvPixcbiAgICAgICAgZGVzY3JpcHRpb246IDxNIHsuLi5tZXNzYWdlcy5kZXNjcmlwdGlvbn0gLz4sXG4gICAgICAgIGFjdGlvbnM6ICdPS19DQU5DRUwnLFxuICAgICAgICBvbkNhbmNlbCxcbiAgICAgICAgb25Db25maXJtLFxuICAgICAgICBjaGlsZHJlbjogKFxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPXs8TSB7Li4ubWVzc2FnZXMubGFiZWx9IC8+fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e25ld1Byb2plY3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgZXJyb3I9eyF2YWxpZH1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIC8+XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZnMgfSBmcm9tICdmaWxlcic7XG5pbXBvcnQgYmFzZTY0IGZyb20gJ2Jhc2U2NC1qcyc7XG5cbmltcG9ydCAqIGFzIGhvb2tzIGZyb20gJy4uLy4uL21pc2MvaG9va3MnO1xuXG5pbXBvcnQge1xuICBQcm9qZWN0LFxuICB0eXBlIEZpbGVyU3RhdEluZm8sXG4gIHR5cGUgRmlsZXJSZWN1cnNpdmVEaXJlY3RvcnlJbmZvLFxufSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuaW1wb3J0IHtcbiAgdHlwZSBDcmVhdGVQcm9qZWN0LFxuICB0eXBlIENyZWF0ZVByb2plY3RWYXJpYWJsZXMsXG4gIHR5cGUgUHJvamVjdElucHV0LFxuICB0eXBlIEZpbGVUcmVlRmlsZVJlY29yZElucHV0LFxuICB0eXBlIEZpbGVUcmVlVHJlZVJlY29yZElucHV0LFxufSBmcm9tICcuL19fZ2VuZXJhdGVkX18vQ3JlYXRlUHJvamVjdCc7XG5cbmNvbnN0IHVzZUNyZWF0ZVByb2plY3RNdXRhdGlvbiA9IGhvb2tzLm1ha2VNdXRhdGlvbjxDcmVhdGVQcm9qZWN0LCBDcmVhdGVQcm9qZWN0VmFyaWFibGVzPihncWxgXG4gIG11dGF0aW9uIENyZWF0ZVByb2plY3QoJHByb2plY3RJbnB1dDogUHJvamVjdElucHV0ISkge1xuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdDogJHByb2plY3RJbnB1dClcbiAgfVxuYCk7XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2plY3RUb0lucHV0KHByb2plY3Q6IFByb2plY3QpOiBQcm9taXNlPFByb2plY3RJbnB1dD4ge1xuICBhc3luYyBmdW5jdGlvbiB2aXNpdEZpbGUoZmlsZTogRmlsZXJTdGF0SW5mbywgcGF0aDogc3RyaW5nW10pOiBQcm9taXNlPEZpbGVUcmVlRmlsZVJlY29yZElucHV0PiB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBmaWxlO1xuICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IHByb2plY3QucmVzb2x2ZSguLi5wYXRoKTtcbiAgICBjb25zdCBiaW5hcnlEYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoYWJzb2x1dGVQYXRoKTtcbiAgICBjb25zdCBkYXRhID0gYmFzZTY0LmZyb21CeXRlQXJyYXkoYmluYXJ5RGF0YSk7XG4gICAgcmV0dXJuIHsgbmFtZSwgZGF0YSB9O1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdmlzaXREaXJlY3RvcnkoXG4gICAgZGlyZWN0b3J5OiBGaWxlclJlY3Vyc2l2ZURpcmVjdG9yeUluZm8sXG4gICAgcGF0aDogc3RyaW5nW10sXG4gICk6IFByb21pc2U8RmlsZVRyZWVUcmVlUmVjb3JkSW5wdXQ+IHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGRpcmVjdG9yeTtcbiAgICBjb25zdCBmaWxlUHJvbWlzZXM6IFByb21pc2U8RmlsZVRyZWVGaWxlUmVjb3JkSW5wdXQ+W10gPSBbXTtcbiAgICBjb25zdCB0cmVlUHJvbWlzZXM6IFByb21pc2U8RmlsZVRyZWVUcmVlUmVjb3JkSW5wdXQ+W10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBkaXJlY3RvcnkuY29udGVudHMpIHtcbiAgICAgIGNvbnN0IGNoaWxkUGF0aCA9IFsuLi5wYXRoLCBmaWxlLm5hbWVdO1xuICAgICAgaWYgKGZpbGUuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gICAgICAgIHRyZWVQcm9taXNlcy5wdXNoKHZpc2l0RGlyZWN0b3J5KGZpbGUsIGNoaWxkUGF0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZVByb21pc2VzLnB1c2godmlzaXRGaWxlKGZpbGUsIGNoaWxkUGF0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFtmaWxlcywgdHJlZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgUHJvbWlzZS5hbGwoZmlsZVByb21pc2VzKSxcbiAgICAgIFByb21pc2UuYWxsKHRyZWVQcm9taXNlcyksXG4gICAgXSk7XG5cbiAgICByZXR1cm4geyBuYW1lLCB0cmVlOiB7IGZpbGVzLCB0cmVlcyB9IH07XG4gIH1cblxuICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gIGNvbnN0IGZpbGVzOiBGaWxlclJlY3Vyc2l2ZURpcmVjdG9yeUluZm8gPSBhd2FpdCBwcm9qZWN0LmdldEZpbGVzKCk7XG4gIC8vIGRpc2NhcmQgdGhlIG5hbWUsIGl0J3Mgbm90IHBhcnQgb2YgdGhlIEZpbGVUcmVlSW5wdXRcbiAgY29uc3QgeyB0cmVlOiBmaWxlVHJlZSB9ID0gYXdhaXQgdmlzaXREaXJlY3RvcnkoZmlsZXMsIFtdKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICBpc1B1YmxpYzogdHJ1ZSxcbiAgICBmaWxlVHJlZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ3JlYXRlUmVtb3RlUHJvamVjdCgpOiAoUHJvamVjdCkgPT4gUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgW3BlcmZvcm1DcmVhdGVQcm9qZWN0LCBfY3JlYXRlUHJvamVjdFJlc3BvbnNlXSA9IHVzZUNyZWF0ZVByb2plY3RNdXRhdGlvbigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdDogUHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGF3YWl0IHByb2plY3RUb0lucHV0KHByb2plY3QpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBlcmZvcm1DcmVhdGVQcm9qZWN0KHsgdmFyaWFibGVzOiB7IHByb2plY3RJbnB1dCB9IH0pO1xuXG4gICAgLy8gd2UncmUgbm90IHBhc3NpbmcgYGlnbm9yZVJlc3VsdHNgLCBzbyB0aGVyZSB3aWxsIGJlIGEgcmVzdWx0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIXJlc3VsdC5kYXRhKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhLmNyZWF0ZVByb2plY3Q7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlUHJvamVjdDtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IFNpbXBsZURpYWxvZyBmcm9tICcuLi8uLi9taXNjL1NpbXBsZURpYWxvZyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIHRpdGxlOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmNyZWF0ZV9leGVyY2lzZV9kaWFsb2cudGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgZm9yIHRoZSBleGVyY2lzZSBjcmVhdGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ3JlYXRlIG5ldyBleGVyY2lzZScsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6ICdhcHAuZXhlcmNpc2VzLmNyZWF0ZV9leGVyY2lzZV9kaWFsb2cuZGVzY3JpcHRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBmb3IgdGhlIGV4ZXJjaXNlIGNyZWF0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdEbyB5b3Ugd2FudCB0byB1cGxvYWQgcHJvamVjdCBcIntuYW1lfVwiIGFzIGFuIGV4ZXJjaXNlPycsXG4gIH0sXG59KTtcblxudHlwZSBTaW1wbGVEaWFsb2dQcm9wcyA9IFJlYWN0LkVsZW1lbnRQcm9wczx0eXBlb2YgU2ltcGxlRGlhbG9nPjtcblxuLy8gdGhpcyB0eXBlIGhhcyBhbGwgcHJvcGVydGllcyB0aGF0IGFyZSBnZW5lcmF0ZWQgYnkgbW91bnRTaW1wbGVEaWFsb2coKVxudHlwZSBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMgPSAkRGlmZjxcbiAgU2ltcGxlRGlhbG9nUHJvcHMsXG4gIC8vIHRoZXNlIGFyZSB0aGUgb25lcyB0aGF0IGFyZW4ndFxuICB7fFxuICAgIGlkOiAkUHJvcGVydHlUeXBlPFNpbXBsZURpYWxvZ1Byb3BzLCAnaWQnPixcbiAgfH0sXG4+O1xuXG50eXBlIENyZWF0ZVJlbW90ZVByb2plY3REaWFsb2dIb29rID0ge3xcbiAgc2hvdyhsb2NhbFByb2plY3Q6IFByb2plY3QpOiB2b2lkLFxuICBtb3VudFNpbXBsZURpYWxvZygpOiBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMsXG58fTtcblxudHlwZSBDb25maWcgPSB7fFxuICBsb2NhbFByb2plY3Q6IFByb2plY3QsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ3JlYXRlUmVtb3RlUHJvamVjdERpYWxvZyhcbiAgb25DcmVhdGU6IChQcm9qZWN0KSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPixcbik6IENyZWF0ZVJlbW90ZVByb2plY3REaWFsb2dIb29rIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8Q29uZmlnIHwgbnVsbD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gc2hvdyhsb2NhbFByb2plY3Q6IFByb2plY3QpIHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldENvbmZpZyh7IGxvY2FsUHJvamVjdCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25Db25maXJtKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFvcGVuKSB0aHJvdyAnZGlhbG9nIGlzIG5vdCBzaG93bic7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoY29uZmlnID09PSBudWxsKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgY29uc3QgeyBsb2NhbFByb2plY3QgfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBvbkNyZWF0ZShsb2NhbFByb2plY3QpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBuYW1lID0gY29uZmlnPy5sb2NhbFByb2plY3QubmFtZSA/PyAnJztcblxuICByZXR1cm4ge1xuICAgIHNob3csXG4gICAgbW91bnRTaW1wbGVEaWFsb2coKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGVuLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IDxNIHsuLi5tZXNzYWdlcy50aXRsZX0gLz4sXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8TSB7Li4ubWVzc2FnZXMuZGVzY3JpcHRpb259IHZhbHVlcz17eyBuYW1lIH19IC8+LFxuICAgICAgICBhY3Rpb25zOiAnT0tfQ0FOQ0VMJyxcbiAgICAgICAgb25DYW5jZWwsXG4gICAgICAgIG9uQ29uZmlybSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IFNpbXBsZURpYWxvZyBmcm9tICcuLi8uLi9taXNjL1NpbXBsZURpYWxvZyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JlL3Byb2plY3RzJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIHRpdGxlOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMuZGVsZXRlX3Byb2plY3RfZGlhbG9nLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZvciB0aGUgcHJvamVjdCBkZWxldGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ29uZmlybSBkZWxldGlvbicsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgaWQ6ICdhcHAucHJvamVjdHMuZGVsZXRlX3Byb2plY3RfZGlhbG9nLmRlc2NyaXB0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RleHQgZm9yIHRoZSBwcm9qZWN0IGRlbGV0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHByb2plY3QgXCJ7bmFtZX1cIj8nLFxuICB9LFxufSk7XG5cbnR5cGUgU2ltcGxlRGlhbG9nUHJvcHMgPSBSZWFjdC5FbGVtZW50UHJvcHM8dHlwZW9mIFNpbXBsZURpYWxvZz47XG5cbi8vIHRoaXMgdHlwZSBoYXMgYWxsIHByb3BlcnRpZXMgdGhhdCBhcmUgZ2VuZXJhdGVkIGJ5IG1vdW50U2ltcGxlRGlhbG9nKClcbnR5cGUgTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzID0gJERpZmY8XG4gIFNpbXBsZURpYWxvZ1Byb3BzLFxuICAvLyB0aGVzZSBhcmUgdGhlIG9uZXMgdGhhdCBhcmVuJ3RcbiAge3xcbiAgICBpZDogJFByb3BlcnR5VHlwZTxTaW1wbGVEaWFsb2dQcm9wcywgJ2lkJz4sXG4gIHx9LFxuPjtcblxudHlwZSBEZWxldGVQcm9qZWN0RGlhbG9nSG9vayA9IHt8XG4gIHNob3cocHJvamVjdDogUHJvamVjdCk6IHZvaWQsXG4gIG1vdW50U2ltcGxlRGlhbG9nKCk6IE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyxcbnx9O1xuXG50eXBlIENvbmZpZyA9IHt8XG4gIHByb2plY3Q6IFByb2plY3QsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVsZXRlUHJvamVjdERpYWxvZyhcbiAgb25EZWxldGU6IChQcm9qZWN0KSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPixcbik6IERlbGV0ZVByb2plY3REaWFsb2dIb29rIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8Q29uZmlnIHwgbnVsbD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gc2hvdyhwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgICBzZXRDb25maWcoeyBwcm9qZWN0IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIW9wZW4pIHRocm93ICdkaWFsb2cgaXMgbm90IHNob3duJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmIChjb25maWcgPT09IG51bGwpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBjb25zdCB7IHByb2plY3QgfSA9IGNvbmZpZztcblxuICAgIC8vIHdoZXRoZXIgdGhlIGRlbGV0aW9uIHN1Y2NlZWRlZCBvciBub3QsIHdlIHdhbnQgdG8gaGlkZSB0aGUgZGlhbG9nLlxuICAgIC8vIFRodXMsIGlnbm9yZSB0aGUgcmVzdWx0IG9mIG9uRGVsZXRlXG4gICAgYXdhaXQgb25EZWxldGUocHJvamVjdCk7XG5cbiAgICAvLyB3ZSBkb24ndCBzZXQgdGhlIHByb2plY3QgdG8gbnVsbCBiZWNhdXNlIHRoYXQgcmVzdWx0cyBpbiBhIGRpc3BsYXkgZ2xpdGNoOlxuICAgIC8vIHRoZSBoaWRlIGFuaW1hdGlvbiB3aWxsIGxlYXZlIHRoZSBwcm9qZWN0IG5hbWUgdmlzaWJsZSBmb3IgYSBzcGxpdCBzZWNvbmRcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBjb25maWc/LnByb2plY3QubmFtZSA/PyAnJztcblxuICByZXR1cm4ge1xuICAgIHNob3csXG4gICAgbW91bnRTaW1wbGVEaWFsb2coKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGVuLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IDxNIHsuLi5tZXNzYWdlcy50aXRsZX0gLz4sXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8TSB7Li4ubWVzc2FnZXMuZGVzY3JpcHRpb259IHZhbHVlcz17eyBuYW1lIH19IC8+LFxuICAgICAgICBhY3Rpb25zOiAnT0tfYXV0b2ZvY3VzX0NBTkNFTCcsXG4gICAgICAgIG9uQ2FuY2VsLFxuICAgICAgICBvbkNvbmZpcm0sXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0ICogYXMgaG9va3MgZnJvbSAnLi4vLi4vbWlzYy9ob29rcyc7XG5cbmltcG9ydCB7IHR5cGUgRGVsZXRlUHJvamVjdCwgdHlwZSBEZWxldGVQcm9qZWN0VmFyaWFibGVzIH0gZnJvbSAnLi9fX2dlbmVyYXRlZF9fL0RlbGV0ZVByb2plY3QnO1xuXG5jb25zdCB1c2VEZWxldGVQcm9qZWN0TXV0YXRpb24gPSBob29rcy5tYWtlTXV0YXRpb248RGVsZXRlUHJvamVjdCwgRGVsZXRlUHJvamVjdFZhcmlhYmxlcz4oZ3FsYFxuICBtdXRhdGlvbiBEZWxldGVQcm9qZWN0KCRwcm9qZWN0SWQ6IElEISkge1xuICAgIGRlbGV0ZVByb2plY3RCeUlkKHByb2plY3RJZDogJHByb2plY3RJZClcbiAgfVxuYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlbGV0ZVJlbW90ZVByb2plY3QoKTogKHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGNvbnN0IFtwZXJmb3JtRGVsZXRlUHJvamVjdCwgX2RlbGV0ZVByb2plY3RSZXNwb25zZV0gPSB1c2VEZWxldGVQcm9qZWN0TXV0YXRpb24oKTtcblxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGVyZm9ybURlbGV0ZVByb2plY3QoeyB2YXJpYWJsZXM6IHsgcHJvamVjdElkIH0gfSk7XG5cbiAgICAvLyB3ZSdyZSBub3QgcGFzc2luZyBgaWdub3JlUmVzdWx0c2AsIHNvIHRoZXJlIHdpbGwgYmUgYSByZXN1bHRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghcmVzdWx0LmRhdGEpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICByZXR1cm4gcmVzdWx0LmRhdGEuZGVsZXRlUHJvamVjdEJ5SWQgPz8gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZWxldGVQcm9qZWN0O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgU2ltcGxlRGlhbG9nIGZyb20gJy4uLy4uL21pc2MvU2ltcGxlRGlhbG9nJztcblxuaW1wb3J0IHsgdHlwZSBSZW1vdGVQcm9qZWN0IH0gZnJvbSAnLi91c2VQcm9qZWN0SW5kZXgnO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgdGl0bGU6IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuZGVsZXRlX2V4ZXJjaXNlX2RpYWxvZy50aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdUaXRsZSBmb3IgdGhlIGV4ZXJjaXNlIGRlbGV0aW9uIGRpYWxvZycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDb25maXJtIGRlbGV0aW9uJyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBpZDogJ2FwcC5leGVyY2lzZXMuZGVsZXRlX2V4ZXJjaXNlX2RpYWxvZy5kZXNjcmlwdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IGZvciB0aGUgZXhlcmNpc2UgZGVsZXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgZXhlcmNpc2UgXCJ7bmFtZX1cIj8nLFxuICB9LFxufSk7XG5cbnR5cGUgU2ltcGxlRGlhbG9nUHJvcHMgPSBSZWFjdC5FbGVtZW50UHJvcHM8dHlwZW9mIFNpbXBsZURpYWxvZz47XG5cbi8vIHRoaXMgdHlwZSBoYXMgYWxsIHByb3BlcnRpZXMgdGhhdCBhcmUgZ2VuZXJhdGVkIGJ5IG1vdW50U2ltcGxlRGlhbG9nKClcbnR5cGUgTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzID0gJERpZmY8XG4gIFNpbXBsZURpYWxvZ1Byb3BzLFxuICAvLyB0aGVzZSBhcmUgdGhlIG9uZXMgdGhhdCBhcmVuJ3RcbiAge3xcbiAgICBpZDogJFByb3BlcnR5VHlwZTxTaW1wbGVEaWFsb2dQcm9wcywgJ2lkJz4sXG4gIHx9LFxuPjtcblxudHlwZSBEZWxldGVSZW1vdGVQcm9qZWN0RGlhbG9nSG9vayA9IHt8XG4gIHNob3cocHJvamVjdDogUmVtb3RlUHJvamVjdCk6IHZvaWQsXG4gIG1vdW50U2ltcGxlRGlhbG9nKCk6IE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyxcbnx9O1xuXG50eXBlIENvbmZpZyA9IHt8XG4gIHByb2plY3Q6IFJlbW90ZVByb2plY3QsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVsZXRlUmVtb3RlUHJvamVjdERpYWxvZyhcbiAgb25EZWxldGU6IChSZW1vdGVQcm9qZWN0KSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPixcbik6IERlbGV0ZVJlbW90ZVByb2plY3REaWFsb2dIb29rIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8Q29uZmlnIHwgbnVsbD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gc2hvdyhwcm9qZWN0OiBSZW1vdGVQcm9qZWN0KSB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgICBzZXRDb25maWcoeyBwcm9qZWN0IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DYW5jZWwoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIW9wZW4pIHRocm93ICdkaWFsb2cgaXMgbm90IHNob3duJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmIChjb25maWcgPT09IG51bGwpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBjb25zdCB7IHByb2plY3QgfSA9IGNvbmZpZztcblxuICAgIC8vIHdoZXRoZXIgdGhlIGRlbGV0aW9uIHN1Y2NlZWRlZCBvciBub3QsIHdlIHdhbnQgdG8gaGlkZSB0aGUgZGlhbG9nLlxuICAgIC8vIFRodXMsIGlnbm9yZSB0aGUgcmVzdWx0IG9mIG9uRGVsZXRlXG4gICAgYXdhaXQgb25EZWxldGUocHJvamVjdCk7XG5cbiAgICAvLyB3ZSBkb24ndCBzZXQgdGhlIHByb2plY3QgdG8gbnVsbCBiZWNhdXNlIHRoYXQgcmVzdWx0cyBpbiBhIGRpc3BsYXkgZ2xpdGNoOlxuICAgIC8vIHRoZSBoaWRlIGFuaW1hdGlvbiB3aWxsIGxlYXZlIHRoZSBwcm9qZWN0IG5hbWUgdmlzaWJsZSBmb3IgYSBzcGxpdCBzZWNvbmRcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBjb25maWc/LnByb2plY3QubmFtZSA/PyAnJztcblxuICByZXR1cm4ge1xuICAgIHNob3csXG4gICAgbW91bnRTaW1wbGVEaWFsb2coKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGVuLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IDxNIHsuLi5tZXNzYWdlcy50aXRsZX0gLz4sXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8TSB7Li4ubWVzc2FnZXMuZGVzY3JpcHRpb259IHZhbHVlcz17eyBuYW1lIH19IC8+LFxuICAgICAgICBhY3Rpb25zOiAnT0tfYXV0b2ZvY3VzX0NBTkNFTCcsXG4gICAgICAgIG9uQ2FuY2VsLFxuICAgICAgICBvbkNvbmZpcm0sXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBiYXNlNjQgZnJvbSAnYmFzZTY0LWpzJztcbmltcG9ydCBmaWxlciwgeyBmcyB9IGZyb20gJ2ZpbGVyJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgKiBhcyBob29rcyBmcm9tICcuLi8uLi9taXNjL2hvb2tzJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5pbXBvcnQge1xuICB0eXBlIFJlbW90ZVByb2plY3RDb250ZW50LFxuICB0eXBlIFJlbW90ZVByb2plY3RDb250ZW50VmFyaWFibGVzLFxuICB0eXBlIFJlbW90ZVByb2plY3RDb250ZW50X3Byb2plY3RCeUlkIGFzIFJlbW90ZVByb2plY3RDb250ZW50cyxcbiAgdHlwZSBSZW1vdGVQcm9qZWN0Q29udGVudF9wcm9qZWN0QnlJZF9maWxlVHJlZXNfY29udGVudHMgYXMgRmlsZVRyZWUsXG59IGZyb20gJy4vX19nZW5lcmF0ZWRfXy9SZW1vdGVQcm9qZWN0Q29udGVudCc7XG5cbmV4cG9ydCB0eXBlIHsgUmVtb3RlUHJvamVjdENvbnRlbnRzIH07XG5cbmNvbnN0IHVzZVJlbW90ZVByb2plY3RDb250ZW50UXVlcnkgPSBob29rcy5tYWtlTGF6eVF1ZXJ5PFxuICBSZW1vdGVQcm9qZWN0Q29udGVudCxcbiAgUmVtb3RlUHJvamVjdENvbnRlbnRWYXJpYWJsZXMsXG4+KGdxbGBcbiAgcXVlcnkgUmVtb3RlUHJvamVjdENvbnRlbnQoJHByb2plY3RJZDogSUQhKSB7XG4gICAgcHJvamVjdEJ5SWQoaWQ6ICRwcm9qZWN0SWQpIHtcbiAgICAgIGlkXG4gICAgICBmaWxlVHJlZVJvb3RJZFxuICAgICAgZmlsZVRyZWVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgY29udGVudHMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB0eXBlXG4gICAgICAgICAgaXRlbUlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbGVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgZGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxuYCk7XG5cbi8qKlxuICogU2F2ZXMgYWxsIHJlbW90ZSBwcm9qZWN0IGNvbnRlbnRzIGluIHRoZSBnaXZlbiBsb2NhbCBwcm9qZWN0LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QsIGNvbnRlbnRzOiBSZW1vdGVQcm9qZWN0Q29udGVudHMpIHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgY29uc3QgZmlsZVRyZWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGNvbnRlbnRzLmZpbGVUcmVlcy5tYXAoKHsgaWQsIGNvbnRlbnRzIH0pID0+IFtpZCwgY29udGVudHNdKSk7XG4gIGNvbnN0IGZpbGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGNvbnRlbnRzLmZpbGVzLm1hcCgoeyBpZCwgZGF0YSB9KSA9PiBbaWQsIGRhdGFdKSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gdmlzaXRDaGlsZHJlbihmaWxlVHJlZTogRmlsZVRyZWVbXSwgcGF0aDogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICBmaWxlVHJlZS5tYXAoYXN5bmMgKHsgbmFtZSwgdHlwZSwgaXRlbUlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgYWJzb2x1dGVQYXRoID0gcHJvamVjdC5yZXNvbHZlKC4uLnBhdGgsIG5hbWUpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdGSUxFJzoge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGZpbGVyLkJ1ZmZlci5mcm9tKGJhc2U2NC50b0J5dGVBcnJheShmaWxlc1tpdGVtSWRdKSk7XG4gICAgICAgICAgICBhd2FpdCBmcy5wcm9taXNlcy53cml0ZUZpbGUoYWJzb2x1dGVQYXRoLCBkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdUUkVFJzoge1xuICAgICAgICAgICAgYXdhaXQgZnMucHJvbWlzZXMubWtkaXIoYWJzb2x1dGVQYXRoKTtcbiAgICAgICAgICAgIGF3YWl0IHZpc2l0Q2hpbGRyZW4oZmlsZVRyZWVzW2l0ZW1JZF0sIFsuLi5wYXRoLCBuYW1lXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgICAgICAgICB0aHJvdyAndW5yZWFjaGFibGUnO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgYXdhaXQgdmlzaXRDaGlsZHJlbihmaWxlVHJlZXNbY29udGVudHMuZmlsZVRyZWVSb290SWRdLCBbXSk7XG59XG5cbi8qKlxuICogUXVlcnkgdG8gZ2V0IHRoZSBjb250ZW50cyBvZiBhIGdpdmVuIHJlbW90ZSBwcm9qZWN0IGlkZW50aWZpZWQgYnkgaXRzIHByb2plY3RJZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJvamVjdENvbnRlbnRRdWVyeSgpOiAoXG4gIHByb2plY3RJZDogc3RyaW5nLFxuKSA9PiBQcm9taXNlPFJlbW90ZVByb2plY3RDb250ZW50cz4ge1xuICAvLyB0aGlzIGNvbnN0cnVjdGlvbiBpcyB0byBnZXQgYSByZXN1bHQgb3V0IG9mIHVzZUxhenlRdWVyeSBhcyBhIHByb21pc2U6XG4gIC8vIHdlIGFzc3VtZSB0aGVyZSBhcmUgbm8gY29uY3VycmVudCByZXF1ZXN0c1xuICAvLyBBdCBzb21lIHBvaW50LCB0aGVyZSB3aWxsIGJlIGRhdGEgZm9yIHRoZSBsYXRlc3QgcmVxdWVzdC4gV2hlbiB0aGlzIGhhcHBlbnMsIHdlIGhhdmUgYWxyZWFkeVxuICAvLyBzYXZlZCBhIHJlc29sdmUgY2FsbGJhY2ssIHNvIGluIGFuIGVmZmVjdCwgd2UgaW52b2tlIHRoYXQgY2FsbGJhY2sgd2l0aCB0aGUgbGF0ZXN0IHJlc3VsdC5cblxuICBjb25zdCBbZXhlY3V0ZVF1ZXJ5LCBwcm9qZWN0Q29udGVudFJlc3BvbnNlXSA9IHVzZVJlbW90ZVByb2plY3RDb250ZW50UXVlcnkoKTtcbiAgY29uc3QgcmVzb2x2ZVJlZiA9IFJlYWN0LnVzZVJlZjx7fFxuICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgIHJlc29sdmU6IChSZW1vdGVQcm9qZWN0Q29udGVudHMpID0+IHZvaWQsXG4gICAgcmVqZWN0OiAoRXJyb3IpID0+IHZvaWQsXG4gIHx9IHwgbnVsbD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IHZhcmlhYmxlcywgZGF0YSwgZXJyb3IgfSA9IHByb2plY3RDb250ZW50UmVzcG9uc2U7XG4gICAgaWYgKCFkYXRhICYmICFlcnJvcikgcmV0dXJuO1xuXG4gICAgLy8gd2UgYXNzdW1lIHRoZXJlIGFyZSBubyBjb25jdXJyZW50IHJlcXVlc3RzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAocmVzb2x2ZVJlZi5jdXJyZW50ID09PSBudWxsKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgY29uc3QgeyBwcm9qZWN0SWQsIHJlc29sdmUsIHJlamVjdCB9ID0gcmVzb2x2ZVJlZi5jdXJyZW50O1xuICAgIHJlc29sdmVSZWYuY3VycmVudCA9IG51bGw7XG5cbiAgICAvLyB3ZSBhc3N1bWUgdGhlcmUgYXJlIG5vIGNvbmN1cnJlbnQgcmVxdWVzdHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICh2YXJpYWJsZXMucHJvamVjdElkICE9PSBwcm9qZWN0SWQpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBpZiAoZGF0YSkgcmVzb2x2ZShkYXRhLnByb2plY3RCeUlkKTtcbiAgICBlbHNlIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGVsc2UgdGhyb3cgJ3VucmVhY2hhYmxlJztcbiAgfSwgW3Byb2plY3RDb250ZW50UmVzcG9uc2VdKTtcblxuICBhc3luYyBmdW5jdGlvbiBsb2FkUHJvamVjdENvbnRlbnQocHJvamVjdElkOiBzdHJpbmcpIHtcbiAgICAvLyB3ZSBhc3N1bWUgdGhlcmUgYXJlIG5vIGNvbmN1cnJlbnQgcmVxdWVzdHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmIChyZXNvbHZlUmVmLmN1cnJlbnQgIT09IG51bGwpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZVJlZi5jdXJyZW50ID0geyBwcm9qZWN0SWQsIHJlc29sdmUsIHJlamVjdCB9O1xuICAgICAgZXhlY3V0ZVF1ZXJ5KHsgdmFyaWFibGVzOiB7IHByb2plY3RJZCB9IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRQcm9qZWN0Q29udGVudDtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCAqIGFzIGhvb2tzIGZyb20gJy4uLy4uL21pc2MvaG9va3MnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmltcG9ydCB7XG4gIHR5cGUgUmVtb3RlUHJvamVjdHMsXG4gIHR5cGUgUmVtb3RlUHJvamVjdHNfcHJvamVjdHMgYXMgUmVtb3RlUHJvamVjdCxcbn0gZnJvbSAnLi9fX2dlbmVyYXRlZF9fL1JlbW90ZVByb2plY3RzJztcblxuZXhwb3J0IHR5cGUgeyBSZW1vdGVQcm9qZWN0IH07XG5cbmNvbnN0IHVzZVJlbW90ZVByb2plY3RzUXVlcnkgPSBob29rcy5tYWtlUXVlcnk8UmVtb3RlUHJvamVjdHMsIHZvaWQ+KGdxbGBcbiAgcXVlcnkgUmVtb3RlUHJvamVjdHMge1xuICAgIHByb2plY3RzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gKTtcblxudHlwZSBMb2NhbFRvUmVtb3RlSWRNYXAgPSB7fCBbcHJvamVjdFVpZDogc3RyaW5nXTogc3RyaW5nIHx9O1xuY29uc3QgdXNlTG9jYWxUb1JlbW90ZUlkTWFwID0gaG9va3MubWFrZUxvY2FsU3RvcmFnZTxMb2NhbFRvUmVtb3RlSWRNYXA+KFxuICAoanNvbikgPT4gKHsgLi4uKGpzb24gIT09IG51bGwgPyBKU09OLnBhcnNlKGpzb24pIDogbnVsbCkgfSksXG4gIChzdGF0ZSkgPT4gSlNPTi5zdHJpbmdpZnkoc3RhdGUpLFxuKTtcblxuLyoqXG4gKiBBIGN1cnJpZWQgZnVuY3Rpb24gcmVtb3RlUHJvamVjdHMgPT4gb2xkTWFwID0+IG5ld01hcCB0aGF0IGZpbHRlcnMgb3V0IHRob3NlIG1hcCBlbnRyaWVzXG4gKiB0aGF0IGRvIG5vdCByZWZlciB0byBhbiBleGlzdGVudCByZW1vdGUgcHJvamVjdC5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTm9uZXhpc3RlbnRNYXBFbnRyaWVzKHJlbW90ZVByb2plY3RzOiBSZW1vdGVQcm9qZWN0W10pIHtcbiAgcmV0dXJuIChvbGRNYXA6IExvY2FsVG9SZW1vdGVJZE1hcCkgPT4ge1xuICAgIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgICBjb25zdCBvbGRFbnRyaWVzOiBbc3RyaW5nLCBzdHJpbmddW10gPSBPYmplY3QuZW50cmllcyhvbGRNYXApO1xuICAgIGNvbnN0IG5ld0VudHJpZXMgPSBvbGRFbnRyaWVzLmZsYXRNYXAoKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBbX3Byb2plY3RVaWQsIHJlbW90ZUlkXSA9IGVudHJ5O1xuXG4gICAgICAvLyBza2lwIGFueSBlbnRyaWVzIHRoYXQgcmVmZXIgdG8gbm9uZXhpc3RlbnQgcmVtb3RlIHByb2plY3RzXG4gICAgICBpZiAocmVtb3RlUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSByZW1vdGVJZCkgPT09IC0xKSByZXR1cm4gW107XG5cbiAgICAgIHJldHVybiBbZW50cnldO1xuICAgIH0pO1xuXG4gICAgaWYgKG9sZEVudHJpZXMubGVuZ3RoID09PSBuZXdFbnRyaWVzLmxlbmd0aCkgcmV0dXJuIG9sZE1hcDtcblxuICAgIGNvbnN0IG5ld01hcDogTG9jYWxUb1JlbW90ZUlkTWFwID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ld0VudHJpZXMpO1xuICAgIHJldHVybiBuZXdNYXA7XG4gIH07XG59XG5cbnR5cGUgTG9jYWxUb1JlbW90ZU1hcCA9IHt8IFtwcm9qZWN0VWlkOiBzdHJpbmddOiBSZW1vdGVQcm9qZWN0IHx9O1xudHlwZSBSZW1vdGVUb0xvY2FsTWFwID0ge3wgW3JlbW90ZUlkOiBzdHJpbmddOiBQcm9qZWN0W10gfH07XG50eXBlIFByb2plY3RJbmRleCA9IHt8XG4gIGxvY2FsUHJvamVjdHM6IFByb2plY3RbXSxcbiAgcmVtb3RlUHJvamVjdHM6IFJlbW90ZVByb2plY3RbXSxcbiAgLy8gbWFwcyBsb2NhbCBwcm9qZWN0VWlkcyBvbnRvIHJlbW90ZSBwcm9qZWN0c1xuICBsb2NhbFRvUmVtb3RlTWFwOiBMb2NhbFRvUmVtb3RlTWFwLFxuICAvLyBtYXBzIHJlbW90ZSBwcm9qZWN0IElEcyBvbnRvIGEgbGlzdCBvZiBsb2NhbCBwcm9qZWN0c1xuICByZW1vdGVUb0xvY2FsTWFwOiBSZW1vdGVUb0xvY2FsTWFwLFxufH07XG5cbnR5cGUgUHJvamVjdEluZGV4QWN0aW9uID1cbiAgfCB7fCB0eXBlOiAnUkVGUkVTSF9MT0NBTCcgfH1cbiAgfCB7fCB0eXBlOiAnUkVGUkVTSF9SRU1PVEUnIHx9XG4gIHwge3wgdHlwZTogJ0FERF9NQVBQSU5HJywgcHJvamVjdFVpZDogc3RyaW5nLCByZW1vdGVJZDogc3RyaW5nIHx9XG4gIHwge3wgdHlwZTogJ1JFTU9WRV9NQVBQSU5HJywgcHJvamVjdFVpZDogc3RyaW5nIHx9O1xuXG4vKipcbiAqIFRoZSBwcm9qZWN0IGluZGV4IHByb3ZpZGVzIGFsbCBsb2NhbCBhbmQgcmVtb3RlIHByb2plY3RzIGFjY2Vzc2libGUgdG8gdGhlIElERSxcbiAqIGFzIHdlbGwgYXMgbWFwcGluZ3MgYmV0d2VlbiB0aG9zZS5cbiAqIEEgbG9jYWwgKHN0b3JlZCBpbiB0aGUgYnJvd3NlcikgcHJvamVjdCBjYW4gYmUgZWRpdGVkLFxuICogYW5kIHN1Y2ggYSBwcm9qZWN0IGNhbiBiZSBhc3NvY2lhdGVkIHdpdGggemVybyBvciBvbmUgcmVtb3RlIHByb2plY3QuXG4gKiBNdWx0aXBsZSBsb2NhbCBwcm9qZWN0cyBjYW4gcmVmZXIgdG8gdGhlIHNhbWUgcmVtb3RlIHByb2plY3QsXG4gKiBzdWNoIGFzIHdoZW4gYXR0ZW1wdGluZyBhbiBleGVyY2lzZSBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBUaGlzIGhvb2sgYWxsb3dzIGFsbCByZWxldmFudCBwcm9qZWN0IGxpc3RzIGFuZCBtYXBwaW5ncyxcbiAqIGFsbG93cyByZWZyZXNoaW5nIHRoZXNlIGxpc3RzIGFuZCBlZGl0aW5nIHRoZSBtYXBwaW5ncyxcbiAqIGFuZCByZW1vdmVzIHN0YWxlIG1hcHBpbmdzIGluIHRoZSBsaWdodCBvZiBjaGFuZ2VzIHRvIHJlbW90ZSBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJvamVjdEluZGV4KCk6IFtQcm9qZWN0SW5kZXgsIChQcm9qZWN0SW5kZXhBY3Rpb24pID0+IHZvaWRdIHtcbiAgY29uc3QgW2xvY2FsVG9SZW1vdGVJZE1hcCwgc2V0TG9jYWxUb1JlbW90ZUlkTWFwXSA9IHVzZUxvY2FsVG9SZW1vdGVJZE1hcCgnUHJvamVjdC1JbmRleCcpO1xuICBjb25zdCByZW1vdGVQcm9qZWN0c1F1ZXJ5ID0gdXNlUmVtb3RlUHJvamVjdHNRdWVyeSgpO1xuICBjb25zdCBbbG9jYWxQcm9qZWN0cywgc2V0TG9jYWxQcm9qZWN0c10gPSBob29rcy51c2VBc3luY1N0YXRlPFByb2plY3RbXT4oW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hSZW1vdGVQcm9qZWN0cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZW1vdGVQcm9qZWN0c1F1ZXJ5LnJlZmV0Y2goKTtcbiAgICBjb25zdCByZW1vdGVQcm9qZWN0cyA9IHJlc3VsdC5kYXRhPy5wcm9qZWN0cyA/PyBbXTtcbiAgICBzZXRMb2NhbFRvUmVtb3RlSWRNYXAocmVtb3ZlTm9uZXhpc3RlbnRNYXBFbnRyaWVzKHJlbW90ZVByb2plY3RzKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoTG9jYWxQcm9qZWN0cygpIHtcbiAgICBzZXRMb2NhbFByb2plY3RzKFByb2plY3QuZ2V0UHJvamVjdHMoKSk7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZnJlc2hMb2NhbFByb2plY3RzKCk7XG4gIH0sIFtdKTtcblxuICAvLyBjYWxsIHJlbW92ZU5vbmV4aXN0ZW50TWFwRW50cmllcyBvbmNlIGFmdGVyIHJlbW90ZSBwcm9qZWN0cyBoYXZlIGluaXRpYWxseSBsb2FkZWRcbiAgY29uc3QgaW5pdGlhbExvYWRSZWYgPSBSZWFjdC51c2VSZWY8Ym9vbGVhbj4odHJ1ZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpbml0aWFsTG9hZFJlZi5jdXJyZW50IHx8ICFyZW1vdGVQcm9qZWN0c1F1ZXJ5LmRhdGEpIHJldHVybjtcbiAgICBpbml0aWFsTG9hZFJlZi5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCByZW1vdGVQcm9qZWN0cyA9IHJlbW90ZVByb2plY3RzUXVlcnkuZGF0YS5wcm9qZWN0cztcbiAgICBzZXRMb2NhbFRvUmVtb3RlSWRNYXAocmVtb3ZlTm9uZXhpc3RlbnRNYXBFbnRyaWVzKHJlbW90ZVByb2plY3RzKSk7XG4gIH0sIFtyZW1vdGVQcm9qZWN0c1F1ZXJ5LmRhdGFdKTtcblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb246IFByb2plY3RJbmRleEFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ1JFRlJFU0hfTE9DQUwnOiB7XG4gICAgICAgIHJlZnJlc2hMb2NhbFByb2plY3RzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ1JFRlJFU0hfUkVNT1RFJzoge1xuICAgICAgICByZWZyZXNoUmVtb3RlUHJvamVjdHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FzZSAnQUREX01BUFBJTkcnOiB7XG4gICAgICAgIGNvbnN0IHsgcHJvamVjdFVpZCwgcmVtb3RlSWQgfSA9IGFjdGlvbjtcbiAgICAgICAgc2V0TG9jYWxUb1JlbW90ZUlkTWFwKChvbGRNYXApID0+ICh7XG4gICAgICAgICAgLi4ub2xkTWFwLFxuICAgICAgICAgIFtwcm9qZWN0VWlkXTogcmVtb3RlSWQsXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FzZSAnUkVNT1ZFX01BUFBJTkcnOiB7XG4gICAgICAgIGNvbnN0IHsgcHJvamVjdFVpZCB9ID0gYWN0aW9uO1xuICAgICAgICBzZXRMb2NhbFRvUmVtb3RlSWRNYXAoKHsgW3Byb2plY3RVaWRdOiBfLCAuLi5uZXdNYXAgfSkgPT4gbmV3TWFwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICAgICAgdGhyb3cgJ3VucmVhY2hhYmxlJztcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdGVQcm9qZWN0cyA9IHJlbW90ZVByb2plY3RzUXVlcnkuZGF0YT8ucHJvamVjdHMgPz8gW107XG4gIGNvbnN0IGxvY2FsVG9SZW1vdGVNYXA6IExvY2FsVG9SZW1vdGVNYXAgPSB7fTtcbiAgY29uc3QgcmVtb3RlVG9Mb2NhbE1hcDogUmVtb3RlVG9Mb2NhbE1hcCA9IHt9O1xuXG4gIGZvciAoY29uc3QgW3Byb2plY3RVaWQsIHJlbW90ZUlkMF0gb2YgT2JqZWN0LmVudHJpZXMobG9jYWxUb1JlbW90ZUlkTWFwKSkge1xuICAgIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgICBjb25zdCByZW1vdGVJZDogc3RyaW5nID0gcmVtb3RlSWQwO1xuXG4gICAgY29uc3QgbG9jYWxQcm9qZWN0ID0gbG9jYWxQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnVpZCA9PT0gcHJvamVjdFVpZCk7XG4gICAgY29uc3QgcmVtb3RlUHJvamVjdCA9IHJlbW90ZVByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHJlbW90ZUlkKTtcbiAgICBpZiAobG9jYWxQcm9qZWN0ICE9PSB1bmRlZmluZWQgJiYgcmVtb3RlUHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFRvUmVtb3RlTWFwW3Byb2plY3RVaWRdID0gcmVtb3RlUHJvamVjdDtcbiAgICAgIGlmICghKHJlbW90ZUlkIGluIHJlbW90ZVRvTG9jYWxNYXApKSByZW1vdGVUb0xvY2FsTWFwW3JlbW90ZUlkXSA9IFtdO1xuICAgICAgcmVtb3RlVG9Mb2NhbE1hcFtyZW1vdGVJZF0ucHVzaChsb2NhbFByb2plY3QpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIGxvY2FsUHJvamVjdHMsXG4gICAgcmVtb3RlUHJvamVjdHMsXG4gICAgbG9jYWxUb1JlbW90ZU1hcCxcbiAgICByZW1vdGVUb0xvY2FsTWFwLFxuICB9O1xuXG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5pbXBvcnQgU2ltcGxlRGlhbG9nIGZyb20gJy4uLy4uL21pc2MvU2ltcGxlRGlhbG9nJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmUvcHJvamVjdHMnO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRlZmluZU1lc3NhZ2VzKHtcbiAgdGl0bGU6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5yZW5hbWVfcHJvamVjdF9kaWFsb2cudGl0bGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGl0bGUgZm9yIHRoZSBwcm9qZWN0IHJlbmFtZSBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUmVuYW1lIHByb2plY3QnLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGlkOiAnYXBwLnByb2plY3RzLnJlbmFtZV9wcm9qZWN0X2RpYWxvZy5kZXNjcmlwdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdUZXh0IGZvciB0aGUgcHJvamVjdCByZW5hbWUgZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgdGhlIHByb2plY3QncyBuZXcgbmFtZS5cIixcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBpZDogJ2FwcC5wcm9qZWN0cy5yZW5hbWVfcHJvamVjdF9kaWFsb2cubmV3X25hbWVfbGFiZWwnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxhYmVsIGZvciB0aGUgcHJvamVjdCBjcmVhdGlvbiBkaWFsb2cncyB0ZXh0IGZpZWxkXCIsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdQcm9qZWN0IE5hbWUnLFxuICB9LFxufSk7XG5cbnR5cGUgU2ltcGxlRGlhbG9nUHJvcHMgPSBSZWFjdC5FbGVtZW50UHJvcHM8dHlwZW9mIFNpbXBsZURpYWxvZz47XG5cbi8vIHRoaXMgdHlwZSBoYXMgYWxsIHByb3BlcnRpZXMgdGhhdCBhcmUgZ2VuZXJhdGVkIGJ5IG1vdW50U2ltcGxlRGlhbG9nKClcbnR5cGUgTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzID0gJERpZmY8XG4gIFNpbXBsZURpYWxvZ1Byb3BzLFxuICAvLyB0aGVzZSBhcmUgdGhlIG9uZXMgdGhhdCBhcmVuJ3RcbiAge3xcbiAgICBpZDogJFByb3BlcnR5VHlwZTxTaW1wbGVEaWFsb2dQcm9wcywgJ2lkJz4sXG4gIHx9LFxuPjtcblxudHlwZSBSZW5hbWVQcm9qZWN0RGlhbG9nSG9vayA9IHt8XG4gIHNob3cocHJvamVjdDogUHJvamVjdCk6IHZvaWQsXG4gIG1vdW50U2ltcGxlRGlhbG9nKCk6IE1vdW50ZWRTaW1wbGVEaWFsb2dQcm9wcyxcbnx9O1xuXG50eXBlIENvbmZpZyA9IHt8XG4gIHByb2plY3Q6IFByb2plY3QsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmVuYW1lUHJvamVjdERpYWxvZyhcbiAgb25SZW5hbWU6IChQcm9qZWN0LCBzdHJpbmcpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+LFxuICBhbGxQcm9qZWN0czogUHJvamVjdFtdLFxuKTogUmVuYW1lUHJvamVjdERpYWxvZ0hvb2sge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxDb25maWcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW25ld1Byb2plY3ROYW1lLCBzZXROZXdQcm9qZWN0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBmdW5jdGlvbiBzaG93KHByb2plY3Q6IFByb2plY3QpIHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldENvbmZpZyh7IHByb2plY3QgfSk7XG4gICAgc2V0TmV3UHJvamVjdE5hbWUocHJvamVjdC5uYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWVDbGVhbiA9IG5hbWUucmVwbGFjZSgvW14tXFx3IyQlKCkuLDo7IF0vZywgJycpO1xuICAgIHNldE5ld1Byb2plY3ROYW1lKG5hbWVDbGVhbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIW9wZW4pIHRocm93ICdkaWFsb2cgaXMgbm90IHNob3duJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmIChjb25maWcgPT09IG51bGwpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBjb25zdCB7IHByb2plY3QgfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBvblJlbmFtZShwcm9qZWN0LCBuZXdQcm9qZWN0TmFtZSk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZhbGlkID1cbiAgICBuZXdQcm9qZWN0TmFtZSAhPT0gJycgJiYgYWxsUHJvamVjdHMuZXZlcnkoKHByb2plY3QpID0+IHByb2plY3QubmFtZSAhPT0gbmV3UHJvamVjdE5hbWUpO1xuXG4gIHJldHVybiB7XG4gICAgc2hvdyxcbiAgICBtb3VudFNpbXBsZURpYWxvZygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW4sXG4gICAgICAgIHZhbGlkLFxuICAgICAgICB0aXRsZTogPE0gey4uLm1lc3NhZ2VzLnRpdGxlfSAvPixcbiAgICAgICAgZGVzY3JpcHRpb246IDxNIHsuLi5tZXNzYWdlcy5kZXNjcmlwdGlvbn0gLz4sXG4gICAgICAgIGFjdGlvbnM6ICdPS19DQU5DRUwnLFxuICAgICAgICBvbkNhbmNlbCxcbiAgICAgICAgb25Db25maXJtLFxuICAgICAgICBjaGlsZHJlbjogKFxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPXs8TSB7Li4ubWVzc2FnZXMubGFiZWx9IC8+fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e25ld1Byb2plY3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgZXJyb3I9eyF2YWxpZH1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIC8+XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVNZXNzYWdlcywgRm9ybWF0dGVkTWVzc2FnZSBhcyBNIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCBTaW1wbGVEaWFsb2cgZnJvbSAnLi4vLi4vbWlzYy9TaW1wbGVEaWFsb2cnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yZS9wcm9qZWN0cyc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICB0aXRsZToge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5jcmVhdGVfZXhlcmNpc2VfZGlhbG9nLnRpdGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RpdGxlIGZvciB0aGUgZXhlcmNpc2UgY3JlYXRpb24gZGlhbG9nJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NyZWF0ZSBuZXcgZXhlcmNpc2UnLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGlkOiAnYXBwLmV4ZXJjaXNlcy5jcmVhdGVfZXhlcmNpc2VfZGlhbG9nLmRlc2NyaXB0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RleHQgZm9yIHRoZSBleGVyY2lzZSBjcmVhdGlvbiBkaWFsb2cnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnRG8geW91IHdhbnQgdG8gdXBsb2FkIHByb2plY3QgXCJ7bmFtZX1cIiBhcyBhbiBleGVyY2lzZT8nLFxuICB9LFxufSk7XG5cbnR5cGUgU2ltcGxlRGlhbG9nUHJvcHMgPSBSZWFjdC5FbGVtZW50UHJvcHM8dHlwZW9mIFNpbXBsZURpYWxvZz47XG5cbi8vIHRoaXMgdHlwZSBoYXMgYWxsIHByb3BlcnRpZXMgdGhhdCBhcmUgZ2VuZXJhdGVkIGJ5IG1vdW50U2ltcGxlRGlhbG9nKClcbnR5cGUgTW91bnRlZFNpbXBsZURpYWxvZ1Byb3BzID0gJERpZmY8XG4gIFNpbXBsZURpYWxvZ1Byb3BzLFxuICAvLyB0aGVzZSBhcmUgdGhlIG9uZXMgdGhhdCBhcmVuJ3RcbiAge3xcbiAgICBpZDogJFByb3BlcnR5VHlwZTxTaW1wbGVEaWFsb2dQcm9wcywgJ2lkJz4sXG4gIHx9LFxuPjtcblxudHlwZSBTaGFyZVByb2plY3REaWFsb2dIb29rID0ge3xcbiAgc2hvdyhsb2NhbFByb2plY3Q6IFByb2plY3QpOiB2b2lkLFxuICBtb3VudFNpbXBsZURpYWxvZygpOiBNb3VudGVkU2ltcGxlRGlhbG9nUHJvcHMsXG58fTtcblxudHlwZSBDb25maWcgPSB7fFxuICBsb2NhbFByb2plY3Q6IFByb2plY3QsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2hhcmVQcm9qZWN0RGlhbG9nKFxuICBvbkNyZWF0ZTogKFByb2plY3QpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+LFxuKTogU2hhcmVQcm9qZWN0RGlhbG9nSG9vayB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPENvbmZpZyB8IG51bGw+KG51bGwpO1xuXG4gIGZ1bmN0aW9uIHNob3cobG9jYWxQcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgICBzZXRDb25maWcoeyBsb2NhbFByb2plY3QgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghb3BlbikgdGhyb3cgJ2RpYWxvZyBpcyBub3Qgc2hvd24nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IHsgbG9jYWxQcm9qZWN0IH0gPSBjb25maWc7XG5cbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgb25DcmVhdGUobG9jYWxQcm9qZWN0KTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmFtZSA9IGNvbmZpZz8ubG9jYWxQcm9qZWN0Lm5hbWUgPz8gJyc7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93LFxuICAgIG1vdW50U2ltcGxlRGlhbG9nKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BlbixcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIHRpdGxlOiA8TSB7Li4ubWVzc2FnZXMudGl0bGV9IC8+LFxuICAgICAgICBkZXNjcmlwdGlvbjogPE0gey4uLm1lc3NhZ2VzLmRlc2NyaXB0aW9ufSB2YWx1ZXM9e3sgbmFtZSB9fSAvPixcbiAgICAgICAgYWN0aW9uczogJ09LX0NBTkNFTCcsXG4gICAgICAgIG9uQ2FuY2VsLFxuICAgICAgICBvbkNvbmZpcm0sXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgZmlsZXIsIHsgZnMgfSBmcm9tICdmaWxlcic7XG5cbmNvbnN0IHNoID0gbmV3IGZzLlNoZWxsKCk7XG5cbi8vIGZvciB0aGUgSURFIHJlbGV2YW50IGZpZWxkcyBvZiBmcy5zdGF0KCkgcmVzdWx0c1xuZXhwb3J0IGludGVyZmFjZSBGaWxlclN0YXRJbmZvIHtcbiAgK25vZGU6IHN0cmluZzsgLy8gaW50ZXJuYWwgbm9kZSBpZCAodW5pcXVlKVxuICAvLyBkZXY6IHN0cmluZzsgLy8gZmlsZSBzeXN0ZW0gbmFtZVxuICArbmFtZTogc3RyaW5nOyAvLyB0aGUgZW50cnkncyBuYW1lIChiYXNlbmFtZSlcbiAgLy8gc2l6ZTogbnVtYmVyOyAvLyBmaWxlIHNpemUgaW4gYnl0ZXNcbiAgLy8gbmxpbmtzOiBudW1iZXI7IC8vIG51bWJlciBvZiBsaW5rc1xuICAvLyBhdGltZTogZGF0ZTsgLy8gbGFzdCBhY2Nlc3MgdGltZSBhcyBKUyBEYXRlIE9iamVjdFxuICAvLyBtdGltZTogZGF0ZTsgLy8gbGFzdCBtb2RpZmllZCB0aW1lIGFzIEpTIERhdGUgT2JqZWN0XG4gIC8vIGN0aW1lOiBkYXRlOyAvLyBjcmVhdGlvbiB0aW1lIGFzIEpTIERhdGUgT2JqZWN0XG4gIC8vIGF0aW1lTXM6IG51bWJlcjsgLy8gbGFzdCBhY2Nlc3MgdGltZSBhcyBVbml4IFRpbWVzdGFtcFxuICAvLyBtdGltZU1zOiBudW1iZXI7IC8vIGxhc3QgbW9kaWZpZWQgdGltZSBhcyBVbml4IFRpbWVzdGFtcFxuICAvLyBjdGltZU1zOiBudW1iZXI7IC8vIGNyZWF0aW9uIHRpbWUgYXMgVW5peCBUaW1lc3RhbXBcbiAgK3R5cGU6ICdGSUxFJyB8ICdESVJFQ1RPUlknIHwgJ1NZTUxJTksnOyAvLyBmaWxlIHR5cGVcbiAgLy8gZ2lkOiBudW1iZXI7IC8vIGdyb3VwIG5hbWVcbiAgLy8gdWlkOiBudW1iZXI7IC8vIG93bmVyIG5hbWVcbiAgLy8gbW9kZTogbnVtYmVyOyAvLyBwZXJtaXNzaW9uc1xuICAvLyB2ZXJzaW9uOiBudW1iZXI7IC8vIHZlcnNpb24gb2YgdGhlIG5vZGVcblxuICBpc0ZpbGUoKTogYm9vbGVhbjsgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBub2RlIGlzIGEgZmlsZS5cbiAgaXNEaXJlY3RvcnkoKTogYm9vbGVhbjsgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBub2RlIGlzIGEgZGlyZWN0b3J5LlxuICAvLyBpc0Jsb2NrRGV2aWNlKCk6IGJvb2xlYW47IC8vIE5vdCBpbXBsZW1lbnRlZCwgcmV0dXJucyBmYWxzZS5cbiAgLy8gaXNDaGFyYWN0ZXJEZXZpY2UoKTogYm9vbGVhbjsgLy8gTm90IGltcGxlbWVudGVkLCByZXR1cm5zIGZhbHNlLlxuICBpc1N5bWJvbGljTGluaygpOiBib29sZWFuOyAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIG5vZGUgaXMgYSBzeW1ib2xpYyBsaW5rLlxuICAvLyBpc0ZJRk8oKTogYm9vbGVhbjsgLy8gTm90IGltcGxlbWVudGVkLCByZXR1cm5zIGZhbHNlLlxuICAvLyBpc1NvY2tldCgpOiBib29sZWFuOyAvLyBOb3QgaW1wbGVtZW50ZWQsIHJldHVybnMgZmFsc2UuXG59XG5cbmV4cG9ydCB0eXBlIEZpbGVyUmVjdXJzaXZlRGlyZWN0b3J5SW5mbyA9IEZpbGVyU3RhdEluZm8gJiB7XG4gIC8vIGNvbnRlbnRzIGFyZSBhZGRlZCBmb3Igc2gubHMoKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgK2NvbnRlbnRzOiBGaWxlclJlY3Vyc2l2ZVN0YXRJbmZvW10sXG59O1xuXG5leHBvcnQgdHlwZSBGaWxlclJlY3Vyc2l2ZVN0YXRJbmZvID0gRmlsZXJSZWN1cnNpdmVEaXJlY3RvcnlJbmZvIHwgRmlsZXJTdGF0SW5mbztcblxuLyoqXG4gKiBHaXZlbiBhIGZpbGUsIHJldHVybnMgdGhlIG5hbWVkIGNoaWxkIGZpbGUuXG4gKiBUaGUgb3BlcmF0aW9uIGZhaWxzIGlmIHRoZSBnaXZlbiBmaWxlIGlzIG5vdCBhIGRpcmVjdG9yeSxcbiAqIG9yIGlmIHRoZSBuYW1lZCBjaGlsZCBkb2VzIG5vdCBleGlzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkKGZpbGU6IEZpbGVyUmVjdXJzaXZlU3RhdEluZm8sIG5hbWU6IHN0cmluZyk6IEZpbGVyUmVjdXJzaXZlU3RhdEluZm8ge1xuICBpZiAoIWZpbGUuaXNEaXJlY3RvcnkoKSkgdGhyb3cgbmV3IEVycm9yKGAnJHtmaWxlLm5hbWV9JyBpcyBub3QgYSBkaXJlY3RvcnlgKTtcbiAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICBjb25zdCBkaXJlY3Rvcnk6IEZpbGVyUmVjdXJzaXZlRGlyZWN0b3J5SW5mbyA9IGZpbGU7XG5cbiAgLy8gRmluZCB0aGUgY2hpbGQgYW5kIG1ha2Ugc3VyZSBpdCBleGlzdHNcbiAgY29uc3QgY2hpbGQgPSBkaXJlY3RvcnkuY29udGVudHMuZmluZCgoZikgPT4gZi5uYW1lID09PSBuYW1lKTtcbiAgaWYgKGNoaWxkID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGRvZXMgbm90IGV4aXN0YCk7XG4gIHJldHVybiBjaGlsZDtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZpbGUsIHJldHVybnMgb25lIG9mIGl0cyBkZXNjZW5kYW50IGZpbGVzLlxuICogVGhlIGZpcnN0IGZyYWdtZW50IG11c3QgYmUgdGhlIG5hbWUgb2YgYSBjaGlsZCBvZiB0aGUgZ2l2ZW4gZmlsZSxcbiAqIFRoZSBzZWNvbmQgdGhlIG5hbWUgb2Ygb25lIG9mIHRoYXQgZmlsZSdzIGNoaWxkcmVuIGFuZCBzbyBvbi5cbiAqIFRoZSBvcGVyYXRpb24gZmFpbHMgaWYgYW4gaW50ZXJtZWRpYXRlIGZpbGUgZmlsZSBpcyBub3QgYSBkaXJlY3RvcnksXG4gKiBvciBpZiBhIG5hbWVkIGRlc2NlbmRhbnQgZG9lcyBub3QgZXhpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjZW5kYW50KFxuICBmaWxlOiBGaWxlclJlY3Vyc2l2ZVN0YXRJbmZvLFxuICAuLi5mcmFnbWVudHM6IHN0cmluZ1tdXG4pOiBGaWxlclJlY3Vyc2l2ZVN0YXRJbmZvIHtcbiAgcmV0dXJuIGZyYWdtZW50cy5yZWR1Y2UoZ2V0Q2hpbGQsIGZpbGUpO1xufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBuYW1lID0gJ1Byb2plY3RFcnJvcic7XG59XG5cbmNvbnN0IGNtcEZpbGUgPSAoYTogRmlsZXJTdGF0SW5mbywgYjogRmlsZXJTdGF0SW5mbykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIC8vIHNvcnQgZGlyZWN0b3JpZXMgYmVmb3JlIGZpbGVzICgmIHN5bWxpbmtzKVxuICBjb25zdCB0eXBlVmFsID0gKGYpID0+IChmLmlzRGlyZWN0b3J5KCkgPyAwIDogMSk7XG4gIHJlc3VsdCA9IHR5cGVWYWwoYSkgLSB0eXBlVmFsKGIpO1xuICBpZiAocmVzdWx0ICE9PSAwKSByZXR1cm4gcmVzdWx0O1xuXG4gIC8vIHNvcnQgYWxwaGFiZXRpY2FsbHlcbiAgcmVzdWx0ID0gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKTtcbiAgaWYgKHJlc3VsdCAhPT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICB1aWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHVpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVpZCA9IHVpZDtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRQcm9qZWN0cygpOiBQcm9taXNlPFByb2plY3RbXT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gYXdhaXQgc2gucHJvbWlzZXMubHMoJy8nKTtcbiAgICBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKCh7IG5hbWUsIG5vZGU6IHVpZCB9KSA9PiBuZXcgUHJvamVjdChuYW1lLCB1aWQpKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRQcm9qZWN0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8UHJvamVjdD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXRoID0gZmlsZXIucGF0aC5yZXNvbHZlKCcvJywgbmFtZSk7XG4gICAgICBjb25zdCB7IG5vZGU6IHVpZCB9ID0gYXdhaXQgZnMucHJvbWlzZXMuc3RhdChwYXRoKTtcbiAgICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lLCB1aWQpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoZXggaW5zdGFuY2VvZiBmaWxlci5FcnJvcnMuRU5PRU5UKVxuICAgICAgICB0aHJvdyBuZXcgUHJvamVjdEVycm9yKGBQcm9qZWN0IFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVQcm9qZWN0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8UHJvamVjdD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXRoID0gZmlsZXIucGF0aC5yZXNvbHZlKCcvJywgbmFtZSk7XG4gICAgICBhd2FpdCBmcy5wcm9taXNlcy5ta2RpcihwYXRoKTtcbiAgICAgIGNvbnN0IHsgbm9kZTogdWlkIH0gPSBhd2FpdCBmcy5wcm9taXNlcy5zdGF0KHBhdGgpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUsIHVpZCk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmIChleCBpbnN0YW5jZW9mIGZpbGVyLkVycm9ycy5FRVhJU1QpXG4gICAgICAgIHRocm93IG5ldyBQcm9qZWN0RXJyb3IoYFByb2plY3QgXCIke25hbWV9XCIgZG9lcyBhbHJlYWR5IGV4aXN0YCk7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmUoLi4uZnJhZ21lbnRzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZpbGVyLnBhdGgucmVzb2x2ZSgnLycsIHRoaXMubmFtZSwgLi4uZnJhZ21lbnRzKTtcbiAgfVxuXG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZSgpO1xuICB9XG5cbiAgYXN5bmMgZ2V0RmlsZXMoKTogUHJvbWlzZTxGaWxlclJlY3Vyc2l2ZVN0YXRJbmZvPiB7XG4gICAgZnVuY3Rpb24gc29ydFJlY3Vyc2l2ZWx5KGZpbGU6IEZpbGVyUmVjdXJzaXZlU3RhdEluZm8pIHtcbiAgICAgIGlmICghZmlsZS5pc0RpcmVjdG9yeSgpKSByZXR1cm47XG5cbiAgICAgIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgICAgIGNvbnN0IGRpcjogRmlsZXJSZWN1cnNpdmVEaXJlY3RvcnlJbmZvID0gZmlsZTtcbiAgICAgIGRpci5jb250ZW50cy5zb3J0KGNtcEZpbGUpO1xuICAgICAgZGlyLmNvbnRlbnRzLmZvckVhY2goKGYpID0+IHNvcnRSZWN1cnNpdmVseShmKSk7XG4gICAgfVxuXG4gICAgY29uc3QgW3Jvb3QsIGNvbnRlbnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGZzLnByb21pc2VzLnN0YXQodGhpcy5wYXRoKSxcbiAgICAgIHNoLnByb21pc2VzLmxzKHRoaXMucGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSksXG4gICAgXSk7XG5cbiAgICByb290LmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgc29ydFJlY3Vyc2l2ZWx5KHJvb3QpO1xuXG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBhc3luYyByZW5hbWUobmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5ld1BhdGggPSBmaWxlci5wYXRoLnJlc29sdmUoJy8nLCBuZXdOYW1lKTtcbiAgICAgIGF3YWl0IGZzLnByb21pc2VzLnJlbmFtZSh0aGlzLnBhdGgsIG5ld1BhdGgpO1xuICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKGV4IGluc3RhbmNlb2YgZmlsZXIuRXJyb3JzLkVOT0VOVClcbiAgICAgICAgdGhyb3cgbmV3IFByb2plY3RFcnJvcihgUHJvamVjdCBcIiR7dGhpcy5uYW1lfVwiIGRvZXMgbm8gbG9uZ2VyIGV4aXN0YCk7XG4gICAgICBpZiAoZXggaW5zdGFuY2VvZiBmaWxlci5FcnJvcnMuRUVYSVNUKVxuICAgICAgICB0aHJvdyBuZXcgUHJvamVjdEVycm9yKGBQcm9qZWN0IFwiJHtuZXdOYW1lfVwiIGRvZXMgYWxyZWFkeSBleGlzdGApO1xuICAgICAgY29uc29sZS5lcnJvcihleCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHVzZSBTaGVsbC5ybSBhcyBpdCBzdXBwb3J0cyByZWN1cnNpdmUgcmVtb3ZhbFxuICAgICAgYXdhaXQgc2gucHJvbWlzZXMucm0odGhpcy5wYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKGV4IGluc3RhbmNlb2YgZmlsZXIuRXJyb3JzLkVOT0VOVClcbiAgICAgICAgdGhyb3cgbmV3IFByb2plY3RFcnJvcihgUHJvamVjdCBcIiR7dGhpcy5uYW1lfVwiIGRvZXMgbm8gbG9uZ2VyIGV4aXN0YCk7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUF6QkE7QUFDQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQTlFQTtBQUNBO0FBc0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQXNDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFzQkE7QUFDQTtBQTFCQTtBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWtDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFzQkE7QUFDQTtBQTFCQTtBQTJCQTs7Ozs7Ozs7QUN6R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFpQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQWJBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFpQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBYkE7QUFjQTs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFpQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBYkE7QUFjQTs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFXQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF4QkE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEtBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBc0NBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQXNCQTtBQUNBO0FBMUJBO0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBaUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFiQTtBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUVBO0FBQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9