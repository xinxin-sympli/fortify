"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

var FORTIFY_POOLING_DELAY = 5000;
var downloadForMac = document.getElementById("download_mac");
var downloadForWin32 = document.getElementById("download_86");
var downloadForWin64 = document.getElementById("download_64");
var downloadForLinux64 = document.getElementById("download_linux_64");

function initSlider() {
  var swiper = new Swiper('.b_slider', {
    pagination: '.pagination',
    paginationClickable: true,
    autoplay: 2000,
    autoHeight: true,
    effect: 'fade',
    loop: true,
    speed: 300
  });
  var sliderContainer = document.getElementsByClassName('swiper-wrapper')[0];

  if (sliderContainer) {
    sliderContainer.addEventListener('click', function () {
      return swiper.slideNext();
    }, true);
  }

  return swiper;
}

function createElement() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var id = arguments.length > 2 ? arguments[2] : undefined;
  var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var element = document.createElement(tag);

  if (typeof content === 'string') {
    element.innerHTML = content;
  }

  if (_instanceof(content, HTMLElement)) {
    element.appendChild(content);
  }

  if (className) {
    element.className = className;
  }

  if (id) {
    element.id = id;
  }

  Object.keys(options).forEach(function (opt) {
    return element[opt] = options[opt];
  });
  return element;
}

function createSVG(data) {
  return "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"".concat(data.className, "\" viewBox=\"").concat(data.viewBox, "\">\n        <use xlink:href=\"#").concat(data.id, "\"></use>\n    </svg>\n  ");
}

function defineMyCertificates() {
  var link = document.getElementById('certificates_link');

  if (link) {
    findFortify().then(function (fortifyEnabled) {
      if (fortifyEnabled) {
        link.classList.remove('m_hidden');
      } else {
        link.classList.add('m_hidden');
      }
    });
  }
}

function listenFortify() {
  defineMyCertificates();
  setTimeout(listenFortify, FORTIFY_POOLING_DELAY);
}

function findFortify() {
  return fetch('https://127.0.0.1:31337/.well-known/webcrypto-socket').then(function (res) {
    return res.status === 200;
  }).catch(function () {
    return false;
  });
}

function getCardsData() {
  return fetch('https://raw.githubusercontent.com/PeculiarVentures/webcrypto-local/master/packages/cards/lib/card.json').then(function (res) {
    return res.json();
  });
}

function getLatestReleaseData() {
  return fetch('https://api.github.com/repos/PeculiarVentures/fortify-web/releases/latest').then(function (res) {
    return res.json();
  });
}

function getFAQData() {
  return fetch('/media/faq.json').then(function (res) {
    return res.json();
  });
}

function prepareTableData(data) {
  console.log(data);

  if (!data) {
    return false;
  }

  return data.cards.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }).map(function (card) {
    var driver = data.drivers.find(function (driver) {
      return driver.id === card.driver;
    });

    if (driver) {
      return {
        name: card.name || card.description,
        mac: !!(driver.file && driver.file.osx),
        win: !!(driver.file && driver.file.windows)
      };
    }

    return {
      name: card.name || card.description,
      mac: false,
      win: false
    };
  });
}

function insertTableData(data) {
  var tableContainer = document.getElementById("question-2");
  var okData = {
    id: 'svg-checkmark',
    viewBox: '0 0 21 16',
    className: 'icon_ok'
  };
  var xData = {
    id: 'svg-cross',
    viewBox: '0 0 15 16',
    className: 'icon_x'
  };

  if (tableContainer && tableContainer.children[1]) {
    var container = createElement('div', 'table_container m_hidden');
    var btnHTMLOpen = "Click to show smart cards that are currently supported <svg class=\"toggle_arrow\" viewBox=\"0 0 8 5\">\n        <path fill-rule=\"evenodd\" d=\"M6.766566 1.710775l-2.53553 2.53553c-.390527.390527-1.023692.39052-1.414213 0L.281286 1.710766c-.390523-.390524-.390528-1.023686 0-1.414214C.468818.109023.723176.00366.98839.003666L6.05946.003663c.552285-.000007 1.000004.447712.999997.999998 0 .265223-.105352.519576-.29289.707115z\"/>\n      </svg>";
    var btnHTMLClose = "Collapse table <svg class=\"toggle_arrow\" viewBox=\"0 0 8 5\">\n        <path fill-rule=\"evenodd\" d=\"M6.766566 1.710775l-2.53553 2.53553c-.390527.390527-1.023692.39052-1.414213 0L.281286 1.710766c-.390523-.390524-.390528-1.023686 0-1.414214C.468818.109023.723176.00366.98839.003666L6.05946.003663c.552285-.000007 1.000004.447712.999997.999998 0 .265223-.105352.519576-.29289.707115z\"/>\n      </svg>";
    var button = createElement('div', 'toggle_button', null, btnHTMLOpen, {
      onclick: function onclick(e) {
        if (container.classList.value.indexOf('m_hidden') === -1) {
          button.innerHTML = btnHTMLOpen;
        } else {
          button.innerHTML = btnHTMLClose;
        }

        container.classList.toggle('m_hidden');
        e.target.classList.toggle('m_hide');
      }
    });
    var table = createElement('table', 'cards_table');
    container.appendChild(table);
    var head = createElement('thead');
    [createElement('th', 'cards_cell m_head', null, 'Card'), createElement('th', 'cards_cell m_head', null, 'Mac OS'), createElement('th', 'cards_cell m_head', null, 'Windows')].forEach(function (el) {
      return head.appendChild(el);
    });
    var body = createElement('tbody');
    data.forEach(function (card) {
      var row = createElement('tr');
      row.appendChild(createElement('td', 'cards_cell', null, card.name));
      row.appendChild(createElement('td', 'cards_cell m_status', null, createSVG(card.mac ? okData : xData)));
      row.appendChild(createElement('td', 'cards_cell m_status', null, createSVG(card.win ? okData : xData)));
      body.appendChild(row);
    });
    table.appendChild(head);
    table.appendChild(body);
    tableContainer.children[1].appendChild(container);
    tableContainer.children[1].appendChild(button);
  }
}

function insertFAQData(data) {
  var tableContainer = document.getElementById('faq_table');

  if (data && Array.isArray(data.questions)) {
    data.questions.forEach(function (pair) {
      var row = createElement('tr', 'row', "question-".concat(pair.id));
      var question = createElement('td', 'cell m_question', null, pair.question);
      var answer = createElement('td', 'cell', null, pair.answer.replace(/\n/g, '<br>'));
      row.appendChild(question);
      row.appendChild(answer);
      tableContainer.appendChild(row);
    });
  }
}

function showAll() {
  downloadForMac.classList.remove('m_hidden', 'm_full_width');
  downloadForWin64.classList.remove('m_hidden', 'm_full_width');
  downloadForWin32.classList.remove('m_hidden', 'm_full_width');
  downloadForLinux64.classList.remove('m_hidden', 'm_full_width');
  document.getElementById('show_all').classList.add('m_hidden');
}

function detectOS() {
  var platform = navigator.platform;
  var userAgent = navigator.userAgent;
  var showBtn = document.getElementById('show_all');

  if (platform.indexOf('Mac') !== -1) {
    downloadForWin32.classList.add('m_hidden');
    downloadForWin64.classList.add('m_hidden');
    downloadForLinux64.classList.add('m_hidden');
    downloadForMac.classList.add('m_full_width');
    showBtn.classList.remove('m_hidden');
  } else if (platform.indexOf('Win') !== -1 && (userAgent.indexOf('WOW64') !== -1 || userAgent.indexOf('Win64') !== -1)) {
    downloadForWin32.classList.add('m_hidden');
    downloadForMac.classList.add('m_hidden');
    downloadForLinux64.classList.add('m_hidden');
    downloadForWin64.classList.add('m_full_width');
    showBtn.classList.remove('m_hidden');
  } else if (platform.indexOf('Win') !== -1) {
    downloadForMac.classList.add('m_hidden');
    downloadForWin64.classList.add('m_hidden');
    downloadForLinux64.classList.add('m_hidden');
    downloadForWin32.classList.add('m_full_width');
    showBtn.classList.remove('m_hidden');
  } else if (platform.indexOf('Linux') !== -1) {
    downloadForMac.classList.add('m_hidden');
    downloadForWin64.classList.add('m_hidden');
    downloadForWin32.classList.add('m_hidden');
    downloadForLinux64.classList.add('m_full_width');
    showBtn.classList.remove('m_hidden');
  }

  showBtn.addEventListener('click', showAll, false);
}

function insertDownloadLinks(assets) {
  for (var i = 0; i < assets.length; i += 1) {
    if (assets[i].name.indexOf('win32-x86') !== -1) {
      downloadForWin32.href = assets[i].browser_download_url;
      continue;
    }

    if (assets[i].name.indexOf('win32-x64') !== -1) {
      downloadForWin64.href = assets[i].browser_download_url;
      continue;
    }

    if (assets[i].name.indexOf('linux-x64') !== -1) {
      downloadForLinux64.href = assets[i].browser_download_url;
      continue;
    }

    if (assets[i].name.indexOf('mac') !== -1) {
      downloadForMac.href = assets[i].browser_download_url;
    }
  }
}

detectOS();
initSlider();
listenFortify();
Promise.all([getCardsData(), getFAQData(), getLatestReleaseData()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      cardsData = _ref2[0],
      fagData = _ref2[1],
      latestReleaseData = _ref2[2];

  var preparedTableData = prepareTableData(cardsData);
  insertFAQData(fagData);
  insertTableData(preparedTableData);
  insertDownloadLinks(latestReleaseData.assets);
}).catch(function (err) {
  console.warn(err);
});