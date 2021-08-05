// @flow
/* eslint-disable */

import * as React from 'react';
import Blockly from 'blockly/core';

import { type Block, registerBlocklyBlock } from '.';

export const CRCL_SET_TCP: Block = {
  blockJson: {
    type: 'crcl_set_tcp',
    message0: '%{BKY_CRCL_SET_TCP}',
    args0: [
      {
        "type": "input_value",
        "name": "Vector",
        "check": "Vector"
      },
      {
        "type": "input_value",
        "name": "Rotation",
        "check": "Rotation"
      },
      {
        "type": "field_checkbox",
        "name": "Linear"
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_SET_TCP_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const linear = block.getFieldValue('Linear') === 'TRUE';
      // <default GSL customizable: crcl_set_tcp-body-JavaScript>
      const vector = Blockly.JavaScript.valueToCode(block, 'Vector', Blockly.JavaScript.ORDER_ATOMIC);
      const rotation = Blockly.JavaScript.valueToCode(block, 'Rotation', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_set_tcp-body-JavaScript>
    },
    Python: block => {
      const linear = block.getFieldValue('Linear') === 'TRUE';
      // <default GSL customizable: crcl_set_tcp-body-Python>
      const vector = Blockly.Python.valueToCode(block, 'Vector', Blockly.Python.ORDER_ATOMIC);
      const rotation = Blockly.Python.valueToCode(block, 'Rotation', Blockly.Python.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_set_tcp-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_set_tcp">
        {/* <default GSL customizable: crcl_set_tcp-default-toolbox> */}
        {/* </GSL customizable: crcl_set_tcp-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_set_tcp-extra-toolbox />
  },
};

export const CRCL_SET_TOOL_VALUE: Block = {
  blockJson: {
    type: 'crcl_set_tool_value',
    message0: '%{BKY_CRCL_SET_TOOL_VALUE}',
    args0: [
      {
        "type": "field_number",
        "name": "value"
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_SET_TOOL_VALUE_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const value = block.getFieldValue('value');
      // <default GSL customizable: crcl_set_tool_value-body-JavaScript>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_set_tool_value-body-JavaScript>
    },
    Python: block => {
      const value = block.getFieldValue('value');
      // <default GSL customizable: crcl_set_tool_value-body-Python>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_set_tool_value-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_set_tool_value">
        {/* <default GSL customizable: crcl_set_tool_value-default-toolbox> */}
        {/* </GSL customizable: crcl_set_tool_value-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_set_tool_value-extra-toolbox />
  },
};

export const CRCL_SWITCH_TOOL: Block = {
  blockJson: {
    type: 'crcl_switch_tool',
    message0: '%{BKY_CRCL_SWITCH_TOOL}',
    args0: [
      {
        "type": "field_number",
        "name": "toolNumber"
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_SWITCH_TOOL_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const toolnumber = block.getFieldValue('toolNumber');
      // <default GSL customizable: crcl_switch_tool-body-JavaScript>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_switch_tool-body-JavaScript>
    },
    Python: block => {
      const toolnumber = block.getFieldValue('toolNumber');
      // <default GSL customizable: crcl_switch_tool-body-Python>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_switch_tool-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_switch_tool">
        {/* <default GSL customizable: crcl_switch_tool-default-toolbox> */}
        {/* </GSL customizable: crcl_switch_tool-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_switch_tool-extra-toolbox />
  },
};

export const CRCL_WAIT: Block = {
  blockJson: {
    type: 'crcl_wait',
    message0: '%{BKY_CRCL_WAIT}',
    args0: [
      {
        "type": "field_number",
        "name": "time"
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_WAIT_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const time = block.getFieldValue('time');
      // <default GSL customizable: crcl_wait-body-JavaScript>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_wait-body-JavaScript>
    },
    Python: block => {
      const time = block.getFieldValue('time');
      // <default GSL customizable: crcl_wait-body-Python>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_wait-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_wait">
        {/* <default GSL customizable: crcl_wait-default-toolbox> */}
        {/* </GSL customizable: crcl_wait-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_wait-extra-toolbox />
  },
};

export const CRCL_TOOL_ON_OFF: Block = {
  blockJson: {
    type: 'crcl_tool_on_off',
    message0: '%{BKY_CRCL_TOOL_ON_OFF}',
    args0: [
      {
        "type": "field_dropdown",
        "name": "onof",
        "options": [
          [
            "ON",
            "ON"
          ],
          [
            "OFF",
            "OFF"
          ]
        ]
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_TOOL_ON_OFF_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
  },
  generators: {
    JavaScript: block => {
      const onof = block.getFieldValue('onof');
      // <default GSL customizable: crcl_tool_on_off-body-JavaScript>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_tool_on_off-body-JavaScript>
    },
    Python: block => {
      const onof = block.getFieldValue('onof');
      // <default GSL customizable: crcl_tool_on_off-body-Python>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_tool_on_off-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_tool_on_off">
        {/* <default GSL customizable: crcl_tool_on_off-default-toolbox> */}
        {/* </GSL customizable: crcl_tool_on_off-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_tool_on_off-extra-toolbox />
  },
};

export const CRCL_VELOCITY: Block = {
  blockJson: {
    type: 'crcl_velocity',
    message0: '%{BKY_CRCL_VELOCITY}',
    args0: [
      {
        "type": "field_number",
        "name": "velocity"
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_VELOCITY_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const velocity = block.getFieldValue('velocity');
      // <default GSL customizable: crcl_velocity-body-JavaScript>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_velocity-body-JavaScript>
    },
    Python: block => {
      const velocity = block.getFieldValue('velocity');
      // <default GSL customizable: crcl_velocity-body-Python>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_velocity-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_velocity">
        {/* <default GSL customizable: crcl_velocity-default-toolbox> */}
        {/* </GSL customizable: crcl_velocity-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_velocity-extra-toolbox />
  },
};

export const CRCL_ACCELERATION: Block = {
  blockJson: {
    type: 'crcl_acceleration',
    message0: '%{BKY_CRCL_ACCELERATION}',
    args0: [
      {
        "type": "field_number",
        "name": "acceleration"
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_ACCELERATION_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const acceleration = block.getFieldValue('acceleration');
      // <default GSL customizable: crcl_acceleration-body-JavaScript>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_acceleration-body-JavaScript>
    },
    Python: block => {
      const acceleration = block.getFieldValue('acceleration');
      // <default GSL customizable: crcl_acceleration-body-Python>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_acceleration-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_acceleration">
        {/* <default GSL customizable: crcl_acceleration-default-toolbox> */}
        {/* </GSL customizable: crcl_acceleration-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_acceleration-extra-toolbox />
  },
};

export const PRINT_BLOCK: Block = {
  blockJson: {
    type: 'print_block',
    message0: '%{BKY_PRINT_BLOCK}',
    args0: [
      {
        "type": "input_value",
        "name": "TEXT",
        "check": [
          "Number",
          "Boolean",
          "String",
          "Vector"
        ]
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 311,
    tooltip: '%{BKY_PRINT_BLOCK_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
  },
  generators: {
    JavaScript: block => {
      // <default GSL customizable: print_block-body-JavaScript>
      const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: print_block-body-JavaScript>
    },
    Python: block => {
      // <default GSL customizable: print_block-body-Python>
      const text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: print_block-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="print_block">
        {/* <default GSL customizable: print_block-default-toolbox> */}
        {/* </GSL customizable: print_block-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: print_block-extra-toolbox />
  },
};

export const GET_INPUT_BLOCK: Block = {
  blockJson: {
    type: 'get_input_block',
    message0: '%{BKY_GET_INPUT_BLOCK}',
    args0: [],
    output: 'String',
    colour: 70,
    tooltip: '%{BKY_GET_INPUT_BLOCK_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      // <default GSL customizable: get_input_block-body-JavaScript>
      // TODO generate code
      const code = '';
      return [code, Blockly.JavaScript.ORDER_NONE];
      // </GSL customizable: get_input_block-body-JavaScript>
    },
    Python: block => {
      // <default GSL customizable: get_input_block-body-Python>
      // TODO generate code
      const code = '';
      return [code, Blockly.Python.ORDER_NONE];
      // </GSL customizable: get_input_block-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="get_input_block">
        {/* <default GSL customizable: get_input_block-default-toolbox> */}
        {/* </GSL customizable: get_input_block-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: get_input_block-extra-toolbox />
  },
};

export const ROTATION_ABC: Block = {
  blockJson: {
    type: 'rotation_abc',
    message0: '%{BKY_ROTATION_ABC}',
    args0: [
      {
        "type": "field_number",
        "name": "A",
        "value": 0,
        "min": 0,
        "max": 360
      },
      {
        "type": "field_number",
        "name": "B",
        "value": 0,
        "min": 0,
        "max": 360
      },
      {
        "type": "field_number",
        "name": "C",
        "value": 90,
        "min": 0,
        "max": 360
      }
    ],
    output: 'Rotation',
    colour: 311,
    tooltip: '%{BKY_ROTATION_ABC_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const a = block.getFieldValue('A');
      const b = block.getFieldValue('B');
      const c = block.getFieldValue('C');
      // <default GSL customizable: rotation_abc-body-JavaScript>
      // TODO generate code
      const code = '';
      return [code, Blockly.JavaScript.ORDER_NONE];
      // </GSL customizable: rotation_abc-body-JavaScript>
    },
    Python: block => {
      const a = block.getFieldValue('A');
      const b = block.getFieldValue('B');
      const c = block.getFieldValue('C');
      // <default GSL customizable: rotation_abc-body-Python>
      // TODO generate code
      const code = '';
      return [code, Blockly.Python.ORDER_NONE];
      // </GSL customizable: rotation_abc-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="rotation_abc">
        {/* <default GSL customizable: rotation_abc-default-toolbox> */}
        {/* </GSL customizable: rotation_abc-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: rotation_abc-extra-toolbox />
  },
};

export const VECTOR_XYZ: Block = {
  blockJson: {
    type: 'vector_xyz',
    message0: '%{BKY_VECTOR_XYZ}',
    args0: [
      {
        "type": "field_number",
        "name": "X",
        "value": 0
      },
      {
        "type": "field_number",
        "name": "Y",
        "value": 0
      },
      {
        "type": "field_number",
        "name": "Z",
        "value": 0
      }
    ],
    output: 'Vector',
    colour: 70,
    tooltip: '%{BKY_VECTOR_XYZ_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const x = block.getFieldValue('X');
      const y = block.getFieldValue('Y');
      const z = block.getFieldValue('Z');
      // <default GSL customizable: vector_xyz-body-JavaScript>
      // TODO generate code
      const code = '';
      return [code, Blockly.JavaScript.ORDER_NONE];
      // </GSL customizable: vector_xyz-body-JavaScript>
    },
    Python: block => {
      const x = block.getFieldValue('X');
      const y = block.getFieldValue('Y');
      const z = block.getFieldValue('Z');
      // <default GSL customizable: vector_xyz-body-Python>
      // TODO generate code
      const code = '';
      return [code, Blockly.Python.ORDER_NONE];
      // </GSL customizable: vector_xyz-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="vector_xyz">
        {/* <default GSL customizable: vector_xyz-default-toolbox> */}
        {/* </GSL customizable: vector_xyz-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: vector_xyz-extra-toolbox />
  },
};

export const VECTOR_SKALAR: Block = {
  blockJson: {
    type: 'vector_skalar',
    message0: '%{BKY_VECTOR_SKALAR}',
    args0: [
      {
        "type": "input_value",
        "name": "Vector",
        "check": "Vector"
      },
      {
        "type": "field_number",
        "name": "Skalar"
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_VECTOR_SKALAR_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const skalar = block.getFieldValue('Skalar');
      // <default GSL customizable: vector_skalar-body-JavaScript>
      const vector = Blockly.JavaScript.valueToCode(block, 'Vector', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: vector_skalar-body-JavaScript>
    },
    Python: block => {
      const skalar = block.getFieldValue('Skalar');
      // <default GSL customizable: vector_skalar-body-Python>
      const vector = Blockly.Python.valueToCode(block, 'Vector', Blockly.Python.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: vector_skalar-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="vector_skalar">
        {/* <default GSL customizable: vector_skalar-default-toolbox> */}
        {/* </GSL customizable: vector_skalar-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: vector_skalar-extra-toolbox />
  },
};

export const CRCL_MOVE_VECTOR_ROTATION: Block = {
  blockJson: {
    type: 'crcl_move_vector_rotation',
    message0: '%{BKY_CRCL_MOVE_VECTOR_ROTATION}',
    args0: [
      {
        "type": "input_value",
        "name": "Vector",
        "check": "Vector"
      },
      {
        "type": "input_value",
        "name": "Rotation",
        "check": "Rotation"
      },
      {
        "type": "field_checkbox",
        "name": "Linear"
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_MOVE_VECTOR_ROTATION_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function'],
  },
  generators: {
    JavaScript: block => {
      const linear = block.getFieldValue('Linear') === 'TRUE';
      // <default GSL customizable: crcl_move_vector_rotation-body-JavaScript>
      const vector = Blockly.JavaScript.valueToCode(block, 'Vector', Blockly.JavaScript.ORDER_ATOMIC);
      const rotation = Blockly.JavaScript.valueToCode(block, 'Rotation', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_move_vector_rotation-body-JavaScript>
    },
    Python: block => {
      const linear = block.getFieldValue('Linear') === 'TRUE';
      // <default GSL customizable: crcl_move_vector_rotation-body-Python>
      const vector = Blockly.Python.valueToCode(block, 'Vector', Blockly.Python.ORDER_ATOMIC);
      const rotation = Blockly.Python.valueToCode(block, 'Rotation', Blockly.Python.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_move_vector_rotation-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_move_vector_rotation">
        {/* <default GSL customizable: crcl_move_vector_rotation-default-toolbox> */}
        {/* </GSL customizable: crcl_move_vector_rotation-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_move_vector_rotation-extra-toolbox />
  },
};

export const CRCL_MOVE_DIRECTION: Block = {
  blockJson: {
    type: 'crcl_move_direction',
    message0: '%{BKY_CRCL_MOVE_DIRECTION}',
    args0: [
      {
        "type": "field_number",
        "name": "Distance"
      },
      {
        "type": "field_dropdown",
        "name": "Direction",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ],
          [
            "up",
            "up"
          ],
          [
            "down",
            "down"
          ]
        ]
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_MOVE_DIRECTION_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
  },
  generators: {
    JavaScript: block => {
      const distance = block.getFieldValue('Distance');
      const direction = block.getFieldValue('Direction');
      // <default GSL customizable: crcl_move_direction-body-JavaScript>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_move_direction-body-JavaScript>
    },
    Python: block => {
      const distance = block.getFieldValue('Distance');
      const direction = block.getFieldValue('Direction');
      // <default GSL customizable: crcl_move_direction-body-Python>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_move_direction-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_move_direction">
        {/* <default GSL customizable: crcl_move_direction-default-toolbox> */}
        {/* </GSL customizable: crcl_move_direction-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_move_direction-extra-toolbox />
  },
};

export const CRCL_ROTATE_Z: Block = {
  blockJson: {
    type: 'crcl_rotate_z',
    message0: '%{BKY_CRCL_ROTATE_Z}',
    args0: [
      {
        "type": "field_dropdown",
        "name": "RotationDirection",
        "options": [
          [
            "clockwise",
            "clockwise"
          ],
          [
            "counterclockwise",
            "counterclockwise"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "RotationZ",
        "value": 90,
        "min": 0,
        "max": 360
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_ROTATE_Z_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
  },
  generators: {
    JavaScript: block => {
      const rotationdirection = block.getFieldValue('RotationDirection');
      const rotationz = block.getFieldValue('RotationZ');
      // <default GSL customizable: crcl_rotate_z-body-JavaScript>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_rotate_z-body-JavaScript>
    },
    Python: block => {
      const rotationdirection = block.getFieldValue('RotationDirection');
      const rotationz = block.getFieldValue('RotationZ');
      // <default GSL customizable: crcl_rotate_z-body-Python>
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_rotate_z-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="crcl_rotate_z">
        {/* <default GSL customizable: crcl_rotate_z-default-toolbox> */}
        {/* </GSL customizable: crcl_rotate_z-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: crcl_rotate_z-extra-toolbox />
  },
};

export const VECTOR_OPERATION: Block = {
  blockJson: {
    type: 'vector_operation',
    message0: '%{BKY_VECTOR_OPERATION}',
    args0: [
      {
        "type": "input_value",
        "name": "Vector1",
        "check": "Vector"
      },
      {
        "type": "field_dropdown",
        "name": "mathOperation",
        "options": [
          [
            "+",
            "Plus"
          ],
          [
            "-",
            "Minus"
          ],
          [
            "/",
            "Division"
          ],
          [
            "*",
            "Multiplicataion"
          ],
          [
            "distance between",
            "Distance Between"
          ],
          [
            "normalize",
            "Normalize"
          ],
          [
            "multiplicate componentvise",
            "multiplicate componentvise"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "Vector2",
        "check": "Vector"
      }
    ],
    output: 'Vector',
    colour: 280,
    tooltip: '%{BKY_VECTOR_OPERATION_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
  },
  generators: {
    JavaScript: block => {
      const mathoperation = block.getFieldValue('mathOperation');
      // <default GSL customizable: vector_operation-body-JavaScript>
      const vector1 = Blockly.JavaScript.valueToCode(block, 'Vector1', Blockly.JavaScript.ORDER_ATOMIC);
      const vector2 = Blockly.JavaScript.valueToCode(block, 'Vector2', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return [code, Blockly.JavaScript.ORDER_NONE];
      // </GSL customizable: vector_operation-body-JavaScript>
    },
    Python: block => {
      const mathoperation = block.getFieldValue('mathOperation');
      // <default GSL customizable: vector_operation-body-Python>
      const vector1 = Blockly.Python.valueToCode(block, 'Vector1', Blockly.Python.ORDER_ATOMIC);
      const vector2 = Blockly.Python.valueToCode(block, 'Vector2', Blockly.Python.ORDER_ATOMIC);
      // TODO generate code
      const code = '';
      return [code, Blockly.Python.ORDER_NONE];
      // </GSL customizable: vector_operation-body-Python>
    },
  },
  toolboxBlocks: {
    default: () => (
      <block type="vector_operation">
        {/* <default GSL customizable: vector_operation-default-toolbox> */}
        {/* </GSL customizable: vector_operation-default-toolbox> */}
      </block>
    ),
    // <default GSL customizable: vector_operation-extra-toolbox />
  },
};

const blocks = [
  CRCL_SET_TCP,
  CRCL_SET_TOOL_VALUE,
  CRCL_SWITCH_TOOL,
  CRCL_WAIT,
  CRCL_TOOL_ON_OFF,
  CRCL_VELOCITY,
  CRCL_ACCELERATION,
  PRINT_BLOCK,
  GET_INPUT_BLOCK,
  ROTATION_ABC,
  VECTOR_XYZ,
  VECTOR_SKALAR,
  CRCL_MOVE_VECTOR_ROTATION,
  CRCL_MOVE_DIRECTION,
  CRCL_ROTATE_Z,
  VECTOR_OPERATION,
];

blocks.forEach(registerBlocklyBlock);

export default blocks;
