'use client'
import React from "react"
import { makeStore } from "./store"
import { Provider } from "react-redux"

export default function CustomProvider ({ children }: { children: React.ReactNode }) {
    return <Provider store={makeStore()}>{ children }</Provider>
}