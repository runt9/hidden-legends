package com.runt9.hiddenLegends

import kotlinext.js.require
import react.dom.render
import kotlin.browser.document

fun main() {
    require("bootstrap")
    require("@fortawesome/fontawesome-free/css/all.min.css")


    render(document.getElementById("root")) {
        app()
    }
}