package com.runt9.hiddenLegends

import react.RBuilder
import react.RComponent
import react.RProps
import react.RState


class App : RComponent<RProps, RState>() {
    init {
    }


    override fun RBuilder.render() {

    }
}

fun RBuilder.app() = child(App::class) {}
