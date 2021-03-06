import SimpleWrapper from './SimpleWrapper.jsx';
import PropTypes from 'prop-types';

/**
 * @original ons-action-sheet-button
 * @category dialog
 * @tutorial react/Reference/action-sheet
 * @description
 * [en]Component that represent each button of the action sheet.[/en]
 * [jp][/jp]
 */
class ActionSheetButton extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-action-sheet-button';
  }
}

ActionSheetButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the action sheet button.[/en]
   *  [jp] [/jp]
   */
  modifier: PropTypes.string,

  /**
   * @name icon
   * @type string
   * @description
   *  [en]Creates an `Icon` component with this string. Only visible on Android.[/en]
   *  [jp] [/jp]
   */
  onClick: PropTypes.func
};

export default ActionSheetButton;
