"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Video", {
  enumerable: true,
  get: function () {
    return _Video.default;
  }
});
Object.defineProperty(exports, "VideoCompressorType", {
  enumerable: true,
  get: function () {
    return _Video.VideoCompressorType;
  }
});
Object.defineProperty(exports, "Audio", {
  enumerable: true,
  get: function () {
    return _Audio.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function () {
    return _Image.default;
  }
});
Object.defineProperty(exports, "getDetails", {
  enumerable: true,
  get: function () {
    return _utils.getDetails;
  }
});
exports.default = void 0;

var _Video = _interopRequireWildcard(require("./Video"));

var _Audio = _interopRequireDefault(require("./Audio"));

var _Image = _interopRequireDefault(require("./Image"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  Video: _Video.default,
  Audio: _Audio.default,
  Image: _Image.default,
  getDetails: _utils.getDetails
};
exports.default = _default;
//# sourceMappingURL=index.js.map