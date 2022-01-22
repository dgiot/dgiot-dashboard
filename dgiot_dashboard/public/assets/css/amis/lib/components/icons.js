"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PencilIcon = exports.MinusIcon = exports.PlusIcon = exports.CheckIcon = exports.RightArrowIcon = exports.LeftArrowIcon = exports.PauseIcon = exports.PlayIcon = exports.MuteIcon = exports.VolumeIcon = exports.EnterIcon = exports.ReDoIcon = exports.UnDoIcon = exports.CloseIcon = exports.Icon = exports.registerIcon = exports.hasIcon = exports.getIcon = exports.rightArrowIcon = exports.leftArrowIcon = exports.pauseIcon = exports.playIcon = exports.muteIcon = exports.volumeIcon = exports.enterIcon = exports.reDoIcon = exports.unDoIcon = exports.closeIcon = void 0;
var tslib_1 = require("tslib");
/**
 * @file Icon
 * @description
 * @author fex
 */
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var close_svg_1 = (0, tslib_1.__importDefault)(require("../icons/close.js"));
exports.CloseIcon = close_svg_1.default;
var undo_svg_1 = (0, tslib_1.__importDefault)(require("../icons/undo.js"));
exports.UnDoIcon = undo_svg_1.default;
var redo_svg_1 = (0, tslib_1.__importDefault)(require("../icons/redo.js"));
exports.ReDoIcon = redo_svg_1.default;
var enter_svg_1 = (0, tslib_1.__importDefault)(require("../icons/enter.js"));
exports.EnterIcon = enter_svg_1.default;
var volume_svg_1 = (0, tslib_1.__importDefault)(require("../icons/volume.js"));
exports.VolumeIcon = volume_svg_1.default;
var mute_svg_1 = (0, tslib_1.__importDefault)(require("../icons/mute.js"));
exports.MuteIcon = mute_svg_1.default;
var play_svg_1 = (0, tslib_1.__importDefault)(require("../icons/play.js"));
exports.PlayIcon = play_svg_1.default;
var pause_svg_1 = (0, tslib_1.__importDefault)(require("../icons/pause.js"));
exports.PauseIcon = pause_svg_1.default;
var left_arrow_svg_1 = (0, tslib_1.__importDefault)(require("../icons/left-arrow.js"));
exports.LeftArrowIcon = left_arrow_svg_1.default;
var right_arrow_svg_1 = (0, tslib_1.__importDefault)(require("../icons/right-arrow.js"));
exports.RightArrowIcon = right_arrow_svg_1.default;
var check_svg_1 = (0, tslib_1.__importDefault)(require("../icons/check.js"));
exports.CheckIcon = check_svg_1.default;
var plus_svg_1 = (0, tslib_1.__importDefault)(require("../icons/plus.js"));
exports.PlusIcon = plus_svg_1.default;
var minus_svg_1 = (0, tslib_1.__importDefault)(require("../icons/minus.js"));
exports.MinusIcon = minus_svg_1.default;
var pencil_svg_1 = (0, tslib_1.__importDefault)(require("../icons/pencil.js"));
exports.PencilIcon = pencil_svg_1.default;
var view_svg_1 = (0, tslib_1.__importDefault)(require("../icons/view.js"));
var remove_svg_1 = (0, tslib_1.__importDefault)(require("../icons/remove.js"));
var retry_svg_1 = (0, tslib_1.__importDefault)(require("../icons/retry.js"));
var upload_svg_1 = (0, tslib_1.__importDefault)(require("../icons/upload.js"));
var file_svg_1 = (0, tslib_1.__importDefault)(require("../icons/file.js"));
var success_svg_1 = (0, tslib_1.__importDefault)(require("../icons/success.js"));
var fail_svg_1 = (0, tslib_1.__importDefault)(require("../icons/fail.js"));
var search_svg_1 = (0, tslib_1.__importDefault)(require("../icons/search.js"));
var back_svg_1 = (0, tslib_1.__importDefault)(require("../icons/back.js"));
var move_svg_1 = (0, tslib_1.__importDefault)(require("../icons/move.js"));
var info_svg_1 = (0, tslib_1.__importDefault)(require("../icons/info.js"));
var location_svg_1 = (0, tslib_1.__importDefault)(require("../icons/location.js"));
var drag_bar_svg_1 = (0, tslib_1.__importDefault)(require("../icons/drag-bar.js"));
var reload_svg_1 = (0, tslib_1.__importDefault)(require("../icons/reload.js"));
var exchange_svg_1 = (0, tslib_1.__importDefault)(require("../icons/exchange.js"));
var columns_svg_1 = (0, tslib_1.__importDefault)(require("../icons/columns.js"));
var calendar_svg_1 = (0, tslib_1.__importDefault)(require("../icons/calendar.js"));
var copy_svg_1 = (0, tslib_1.__importDefault)(require("../icons/copy.js"));
var filter_svg_1 = (0, tslib_1.__importDefault)(require("../icons/filter.js"));
var caret_svg_1 = (0, tslib_1.__importDefault)(require("../icons/caret.js"));
var right_arrow_bold_svg_1 = (0, tslib_1.__importDefault)(require("../icons/right-arrow-bold.js"));
var column_filter_svg_1 = (0, tslib_1.__importDefault)(require("../icons/column-filter.js"));
var zoom_in_svg_1 = (0, tslib_1.__importDefault)(require("../icons/zoom-in.js"));
var zoom_out_svg_1 = (0, tslib_1.__importDefault)(require("../icons/zoom-out.js"));
var question_svg_1 = (0, tslib_1.__importDefault)(require("../icons/question.js"));
var question_mark_svg_1 = (0, tslib_1.__importDefault)(require("../icons/question-mark.js"));
var window_restore_svg_1 = (0, tslib_1.__importDefault)(require("../icons/window-restore.js"));
var info_circle_svg_1 = (0, tslib_1.__importDefault)(require("../icons/info-circle.js"));
var warning_svg_1 = (0, tslib_1.__importDefault)(require("../icons/warning.js"));
var warning_mark_svg_1 = (0, tslib_1.__importDefault)(require("../icons/warning-mark.js"));
var schedule_svg_1 = (0, tslib_1.__importDefault)(require("../icons/schedule.js"));
var home_svg_1 = (0, tslib_1.__importDefault)(require("../icons/home.js"));
var folder_svg_1 = (0, tslib_1.__importDefault)(require("../icons/folder.js"));
var sort_default_svg_1 = (0, tslib_1.__importDefault)(require("../icons/sort-default.js"));
var sort_asc_svg_1 = (0, tslib_1.__importDefault)(require("../icons/sort-asc.js"));
var sort_desc_svg_1 = (0, tslib_1.__importDefault)(require("../icons/sort-desc.js"));
var setting_svg_1 = (0, tslib_1.__importDefault)(require("../icons/setting.js"));
var plus_cicle_svg_1 = (0, tslib_1.__importDefault)(require("../icons/plus-cicle.js"));
var ellipsis_v_svg_1 = (0, tslib_1.__importDefault)(require("../icons/ellipsis-v.js"));
var expand_alt_svg_1 = (0, tslib_1.__importDefault)(require("../icons/expand-alt.js"));
var compress_alt_svg_1 = (0, tslib_1.__importDefault)(require("../icons/compress-alt.js"));
var transparent_svg_1 = (0, tslib_1.__importDefault)(require("../icons/transparent.js"));
var loading_outline_svg_1 = (0, tslib_1.__importDefault)(require("../icons/loading-outline.js"));
// 兼容原来的用法，后续不直接试用。
exports.closeIcon = react_1.default.createElement(close_svg_1.default, null);
exports.unDoIcon = react_1.default.createElement(undo_svg_1.default, null);
exports.reDoIcon = react_1.default.createElement(redo_svg_1.default, null);
exports.enterIcon = react_1.default.createElement(enter_svg_1.default, null);
exports.volumeIcon = react_1.default.createElement(volume_svg_1.default, null);
exports.muteIcon = react_1.default.createElement(mute_svg_1.default, null);
exports.playIcon = react_1.default.createElement(play_svg_1.default, null);
exports.pauseIcon = react_1.default.createElement(pause_svg_1.default, null);
exports.leftArrowIcon = react_1.default.createElement(left_arrow_svg_1.default, null);
exports.rightArrowIcon = react_1.default.createElement(right_arrow_svg_1.default, null);
var iconFactory = {};
function getIcon(key) {
    return iconFactory[key];
}
exports.getIcon = getIcon;
function hasIcon(iconName) {
    return !!getIcon(iconName);
}
exports.hasIcon = hasIcon;
function registerIcon(key, component) {
    iconFactory[key] = component;
}
exports.registerIcon = registerIcon;
registerIcon('close', close_svg_1.default);
registerIcon('undo', undo_svg_1.default);
registerIcon('redo', redo_svg_1.default);
registerIcon('enter', enter_svg_1.default);
registerIcon('volume', volume_svg_1.default);
registerIcon('mute', mute_svg_1.default);
registerIcon('play', play_svg_1.default);
registerIcon('pause', pause_svg_1.default);
registerIcon('left-arrow', left_arrow_svg_1.default);
registerIcon('right-arrow', right_arrow_svg_1.default);
registerIcon('prev', left_arrow_svg_1.default);
registerIcon('next', right_arrow_svg_1.default);
registerIcon('check', check_svg_1.default);
registerIcon('plus', plus_svg_1.default);
registerIcon('add', plus_svg_1.default);
registerIcon('minus', minus_svg_1.default);
registerIcon('pencil', pencil_svg_1.default);
registerIcon('view', view_svg_1.default);
registerIcon('remove', remove_svg_1.default);
registerIcon('retry', retry_svg_1.default);
registerIcon('upload', upload_svg_1.default);
registerIcon('file', file_svg_1.default);
registerIcon('success', success_svg_1.default);
registerIcon('fail', fail_svg_1.default);
registerIcon('warning', warning_svg_1.default);
registerIcon('warning-mark', warning_mark_svg_1.default);
registerIcon('search', search_svg_1.default);
registerIcon('back', back_svg_1.default);
registerIcon('move', move_svg_1.default);
registerIcon('info', info_svg_1.default);
registerIcon('info-circle', info_circle_svg_1.default);
registerIcon('location', location_svg_1.default);
registerIcon('drag-bar', drag_bar_svg_1.default);
registerIcon('reload', reload_svg_1.default);
registerIcon('exchange', exchange_svg_1.default);
registerIcon('columns', columns_svg_1.default);
registerIcon('calendar', calendar_svg_1.default);
registerIcon('copy', copy_svg_1.default);
registerIcon('filter', filter_svg_1.default);
registerIcon('column-filter', column_filter_svg_1.default);
registerIcon('caret', caret_svg_1.default);
registerIcon('right-arrow-bold', right_arrow_bold_svg_1.default);
registerIcon('zoom-in', zoom_in_svg_1.default);
registerIcon('zoom-out', zoom_out_svg_1.default);
registerIcon('question', question_svg_1.default);
registerIcon('question-mark', question_mark_svg_1.default);
registerIcon('window-restore', window_restore_svg_1.default);
registerIcon('schedule', schedule_svg_1.default);
registerIcon('home', home_svg_1.default);
registerIcon('folder', folder_svg_1.default);
registerIcon('sort-default', sort_default_svg_1.default);
registerIcon('sort-asc', sort_asc_svg_1.default);
registerIcon('sort-desc', sort_desc_svg_1.default);
registerIcon('setting', setting_svg_1.default);
registerIcon('plus-cicle', plus_cicle_svg_1.default);
registerIcon('ellipsis-v', ellipsis_v_svg_1.default);
registerIcon('expand-alt', expand_alt_svg_1.default);
registerIcon('compress-alt', compress_alt_svg_1.default);
registerIcon('transparent', transparent_svg_1.default);
registerIcon('loading-outline', loading_outline_svg_1.default);
function Icon(_a) {
    var icon = _a.icon, className = _a.className, rest = (0, tslib_1.__rest)(_a, ["icon", "className"]);
    // jest 运行环境下，把指定的 icon 也输出到 snapshot 中。
    if (typeof jest !== 'undefined') {
        rest.icon = icon;
    }
    var Component = getIcon(icon);
    return Component ? (react_1.default.createElement(Component, (0, tslib_1.__assign)({}, rest, { className: (className || '') + " icon-" + icon }))) : (react_1.default.createElement("span", { className: "text-danger" },
        "\u6CA1\u6709 icon ",
        icon));
}
exports.Icon = Icon;
//# sourceMappingURL=./components/icons.js.map