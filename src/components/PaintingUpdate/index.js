import { useEffect } from "react"
import { useState } from "react"
import { BiUser } from "react-icons/bi"
import { useHistory } from "react-router-dom"
import { api } from "../../services/api"
import ArtistForms from "../ArtistCreate"
import FormsButton from "../FormsButton"
import FormsInput from "../FormsInput"
import Modal from "../Modal"
import PlusButton from "../PlusButton"
import Select from "../Select"
import StyleForms from "../StyleCreate"
import TextArea from "../TextArea"
import { Container, SelectContainer } from "./styles"

const PaintingsUpdate = ({showModal, setShowModal, id}) => {
    
    const[name, setName] = useState('')
    const[year, setYear] = useState('')
    const[artistId, setArtistId] = useState(0)
    const[styleId, setStyleId] = useState(0)
    const[description, setDescription] = useState('')
    const[currentplace, setCurrentplace] = useState('')
    const[artists, setArtists] = useState([])
    const[styles, setStyles] = useState([])
    const[showArtistModal, setShowArtistModal] = useState(false)
    const[showStyleModal, setShowStyleModal] = useState(false)

    const handleArtistClick= () => {
        setShowArtistModal(true)
    }

    const handleStyleClick= () => {
        setShowStyleModal(true)
    }

    const loadArtists = async () => {
        const response = await api.get('/api/v1/artists/index')
        setArtists(response.data)
    }

    const loadStyles = async () => {
        const response = await api.get('/api/v1/styles')
        setStyles(response.data)
    }

    const loadPainting = async () => {
        const response = await api.get(`/api/v1/paintings/show/${id}`)
        setName(response.data.name)
        setYear(response.data.year)
        setArtistId(response.data.artist_id)
        setStyleId(response.data.style_id)
        setDescription(response.data.description)
        setCurrentplace(response.data.currentplace)
    }

    useEffect(() => {
        loadArtists()
        loadStyles()
        loadPainting()
    }, [])

    const history = useHistory()

    const IconSVG1 = () => {
        return (
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.959 4.23145H11.4258V22H7.03125V4.23145H0.585938V0.671875H17.959V4.23145Z" fill="black"/>
            </svg>
        )
    }

    const IconSVG2 = () => {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.5H10C5.86375 2.5 2.5 5.86375 2.5 10V26.25C2.5 26.9412 3.05875 27.5 3.75 27.5H20C24.1363 27.5 27.5 24.1362 27.5 20V10C27.5 5.86375 24.1363 2.5 20 2.5ZM25 20C25 22.7575 22.7575 25 20 25H5V10C5 7.2425 7.2425 5 10 5H20C22.7575 5 25 7.2425 25 10V20Z" fill="black"/>
                <path d="M8.75 18.7338V21.2325H11.2487L18.16 14.33L15.6625 11.8325L8.75 18.7338Z" fill="black"/>
                <path d="M19.3381 13.1521L16.8394 10.6533L18.7442 8.74858L21.2429 11.2474L19.3381 13.1521Z" fill="black"/>
            </svg>
        )
    }

    const IconSVG3 = () => {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 5H6.25C4.86929 5 3.75 6.11929 3.75 7.5V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V7.5C26.25 6.11929 25.1307 5 23.75 5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 2.5V7.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 2.5V7.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.75 12.5H26.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    const IconSVG4 = () => {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="30" height="30" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0" transform="translate(-0.0625) scale(0.00219298)"/>
                    </pattern>
                    <image id="image0" width="513" height="456" xlinkHref="data:image/png;base64,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"/>
                </defs>
            </svg>

        )
    }

    const IconSVG5 = () => {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="30" height="30" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0" transform="scale(0.00195312)"/>
                    </pattern>
                    <image id="image0" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Ae2dCbQ0VXmuX5BJQMUBRBQEEkdADRpjVDQaFO+9S1wqxjgExzhPuVGJGr044xyMJtcY8F7BRLhBDThEccCgOGEUB4IDikoYZBBQmfm56/tP1d/NoU+f7l3frv3VrqfWOqv7dPfe9dXzflX7rV1Ve0ssEIDAWAncStKeFfzdeqwCst0QgAAEIACBRQncT9Ixki6TdH1Ff1dIOk3SGyTtvSgMfgcBCEAAAhConcAWkt4raUNFjf5aBuY6SUdJukPtorJ9EIAABCAAgXkENpP0oRE0/KsNwS8l7TcPDN9BAAIQgAAEaibw9BE2/q0ZuErSQ2oWl22DAAQgAAEIzCKwuaSfj9gAmBG4UNIes+DwGQQgAAEIQKBWAvcfeePf9gT8a60Cs10QgAAEIACBWQSejQHY9LTDA2YB4jMIQAACEIBAjQRehQHYZADeV6PAbBMEIAABCEBgFoFXYwA2GYBzJNkTESwQgAAEIACB6glgAG444BGjBlaf8mwgBCAAAQgYAQzADQ3APUgLCEAAAhCAwBgIYABuaAAYGGgMWc82QgACEIAAPQCr7oHAALBTQAACEIDAKAjQA0APwCgSnY2EAAQgAIEbEuhiAC6WdGbAv8tXndW3g/0s8koPwA3zg/8gAAEIQKBSAl0MgJWNuHwWAxBRFmKCAAQgAIFIBDAAXAKIlI/EAgEIQAACPRHAAGAAeko1VgMBCEAAApEIYAAwAJHykVggAAEIQKAnAhgADEBPqcZqIAABCEAgEgEMAAYgUj4SCwQgAAEI9EQAA4AB6CnVWA0EIAABCEQigAHAAETKR2KBAAQgAIGeCGAAMAA9pRqrgQAEIACBSAQwABiASPlILBCAAAQg0BMBDAAGoKdUYzUQgAAEIBCJAAYAAxApH4kFAhCAAAR6IoABwAD0lGqsBgIQgAAEIhHAAGAAIuUjsUAAAhCAQE8EMAAYgJ5SjdVAAAIQgEAkAhgADECkfCQWCEAAAhDoiQAGAAPQU6qxGghAAAIQiEQAA4ABiJSPxAIBCEAAAj0RwABgAHpKNVYDAQhAAAKRCGAAMACR8pFYIAABCECgJwIYAAxAT6nGaiAAAQhAIBIBDAAGIFI+EgsEIAABCPREAAOAAegp1VgNBCAAAQhEItDFAHxa0iEB/36kGzbq1y/x/36RxCEWCEAAAhCAQC4CXQzAMg3rUH6LAciVadQLAQhAAAKhCGAAbthbgAEIlZ4EAwEIQAACuQhgADAAuXKLeiEAAQhAIDABDMANDcB9A2tFaBCAAAQgAAE3AhiAGxqA27uRpSIIQAACEIBAYAIYgIkBuELSFoG1IjQIQAACEICAGwEMwMQAnOBGlYogAAEIQAACwQlgACYG4GnBtSI8CEAAAhCAgBsBDMCKAThT0lZuVKkIAhCAAAQgEJwABkDaIOnA4DoRHgQgAAEIQMCVAAZAeqMrUSqDAAQgAAEIDIDA2A3A4ZI2H4BOhAgBCEAAAhBwJTBWA3ChpKe6kqQyCEAAAhCAwIAIjM0A/ETSGyTtMCCNCBUCEIAABCDgTqCLAYg6HfDqKYpfLOkgSfu406NCCEAAAhCAwEAJdDEAVpYFAhCAAAQgAIEBEsAADFA0QoYABCAAAQh0JYAB6EqQ8hCAAAQgAIEBEsAADFA0QoYABCAAAQh0JYAB6EqQ8hCAAAQgAIEBEsAADFA0QoYABCAAAQh0JYAB6EqQ8hCAAAQgAIEBEsAADFA0QoYABCAAAQh0JYAB6EqQ8hCAAAQgAIEBEsAADFA0QoYABCAAAQh0JYAB6EqQ8hCAAAQgAIEBEsAADFA0QoYABCAAAQh0JYAB6EqQ8hCAAAQgAIEBEsAADFA0QoYABCAAAQh0JYAB6EqQ8hCAAAQgAIEBEsAADFA0QoYABCAAAQh0JYAB6EqQ8hCAAAQgAIEBEsAADFA0QoYABCAAAQisRWAnSQ+QdICkx835+7Ck6xP/rOy8um3dFsOOawXJ5xCAAAQgAAEIdCNwF0kvk/RJSRcnNuipRmCRchbTJyS9VNKdu20qpSEAAQhAAALjJrClpKdK+mrABn89U3CKpKdIsm1ggQAEIAABCEBgAQKbNQ3/WQNs+Fcbg59KOliSbRMLBCAAAQhAAAJrELDu85MraPhXG4EvSrrTGtvMxxCAAAQgAIFRE3iipMsqbPxbM2Db9vhRK8zGQwACEIAABFYROKTihr81AO3rYau2nX8hAAEIQAACoyTwrhE1/q0JeMcolWajIQABCEAAAg2B14yw8W9NwCvJAghAAAIQgMAYCTx2xI2/mYANkh49RuHZZghAAAIQGC+BPSVdMnIDYCbgV5J2H28asOUQgAAEIDA2AjaiX9sVPvbXT49NfLYXAhCAAATGSeAgGv8bmR8uBYxzX2CrIQABCIyGgI2I910MwI0MwPclbT6aLGBDIQABCEBgdAQeQ+N/o8a/vQTyqNFlAxsMAQhAAAKjIfApRwPwW0n/LumfJb2v5z9bpw1ZbDG0DXjX14+PJgvYUAhAAAIQGBWB20m61qHB/LGkJ0m6aQB620p6sqQzHbbrGkk7BdgmQoAABCAAAQi4Eni6QyN5rCRrdKMt20g6ymH7/izahhEPBCAAAQhAoCuBrg3kccFvlLMbHI/paAI+0BUy5SEAAQhAAALRCJzRoXE8W9J20TZoRjw3k3ROh+08fUadfAQBCEAAAhAYLIEtJV3doWF83oC2/AUdtvMqSVsMaFsJFQIQgAAEIDCXgA13m3qXvN04uOPc2mN9aTfyXddhe+8Ya3OIBgIQgAAEIJBO4J4dGsQfpK+2WMkfddjeexSLmhVDAAIQgAAEnAk8oEOD+EXnWPqozsYnSO3xMFYsEIAABCAAgSoIPKhDg3jiAAlYzKkGwFixQAACEIAABKoggAFY3BBgAKpIeTYCAhCAAASMAAYAA8CeAAEIQAACIySAAcAAjDDt2WQIQAACEMAAYADYCyAAAQhAYIQEMAAYgBGmPZsMAQhAAAIYAAwAewEEIAABCIyQQAQDsJukx0k6RNJbJL1f0hGS3ibpFc0Uw3d20obHAJ1AUg0EIAABCAybQAkDcFtJT2lm6Ftmgp6LJB0v6bmSUoflxQAMO1+JHgIQgAAEnAj0YQA2l3Tv5gz/Sx3H458exOdMSe+T9EhJWy/IAwOwICh+BgEIQAACdRPIZQBu1XTrWwO9zFn+dAO/zPvfSrLG/cWSdp0jGQZgDhy+ggAEIACB8RDwNAB7NWf51sh2mWJ4mYZ/rd9a78DhkvaXZFMetwsGoCXBKwQgAAEIjJpAFwPwZUkHSTpS0rkdxthfqxH3+vxiSR+WdLCkr3aI01ixQAACEIAABKog0MUAeDXQQ6kHA1BFyrMREIAABCBgBDAAjAPAngABCEAAAiMkgAHAAIww7dlkCEAAAhDAAGAA2AsgAAEIQGBEBPaQ9DxJJ3W4KW4o1+694vyKpJdJsqcdWCAAAQhAAAKDILCFpAdKOkzSqTT66moKzpP0wWasg5sPIgMIEgIQgAAERkNgp+bRt2MlXUKj37nRX8s0XCPJRji0uQxsxEMWCEAAAhCAQK8EbtI0QIc2Z/kbaPSzNfprmQH7vB2i2CY42r7XDGBlEIAABCAwGgK3abqhrTvaBryZ1zDxXf98Lm+GKLbegbuOJivZUAhAAAIQcCdgE+v8gaTXSfqG48Q6pc3BtU03+uubyxZPlvRqSZ+RdGVFxub7zTTHD5W0lXt2UCEEIAABCFRFoO+JdfoyAxdKsvsTniVp5zmKbduM6W9j+/+sIjOw6ARGc9DwFQQgAAEI1EYg0sQ6nobAzoDtSQSbpMeeTEhZ9mxm/bOJfa6qyBCsNYFRCiPKQAACEIDAQAhs18xrb9Pn/qKiRu3Xkk5ozvJ3yaAF3DJApUoIQAACEMhLgDNZf770nPgzpUYIQAACEOhIgGvZHQEuWXzs904siYufQwACEICAJwE7y7eb3KwbvKa72dtn3R8paWtPYJnqsqcnbJAeexzPBu25rpLLLPb0hI3saPdV2EiPm2XiR7UQgAAEILAOgW2aG9zsgHx6JY2M3QRY2/PstY6f8MvmyYqDJe2wTq7yNQQgAAEIdCSwe3OWb4+0XVZRo9+e5dc+ol2tIyi2vQM2MqT1ftA70HFHpzgEIACBWifWYUz7ldyudQ4FJjDi2AUBCEAggQCNQgK0CopY70CNsyhi9ipITjYBAhDIQ4Bu4Txch14rl3uGriDxQwACEJhBgBvDZkDhozUJcMPnmmj4AgIQgEBsAjwaFlufoUXHI59DU4x4IQCBURG4dTN9rg25e05Fd+xfsODEOqMSu+DGTg/6dFZFecYERgWTilVDAALLEbBHn/aV9NeSTpFkj0Z5Tm5Tqi4byObrkuwRr/tKst6MWhZrPLevZWOa7dhH0sslfUGS3YBXKm+81/stSW9qbpS0+2ZYIAABCBQlcAtJB0k6UtK5FR1sL5b0YUk2yIs9lVDLYr0yT5B0lKSzp/SyXo3jJD1T0u1r2VhJbX4eUVkvVK35WVHqsSkQqJMAE+sMS9eUSXtqnS43hYX3mXyO+jymfh5WVhMtBCDQC4Hpa6w/mzprzHEg67POWq+xek/bm3ua4V6SeMZKmMBoBhQ+ggAEIMBd1sPKgT57ZWo82+QplWHlO9FCAAKOBMbwnPVdHHmVripKr8yFlT4RwTgVpTOc9UMAAlkJ7MHEOln5elcevVemnRCntulyGanSO5OpDwIQ6J0AE+v0jrzTCofeK1PrdLnMVdEprSkMAQj0ReC2zaNsNn3uJRXdwGePHH6wGWjo5n3B7GE9tY5/3/YO1DZdLhMY9bBTsAoIQGAxAnRXLsYpyq9q7ZVZ72mOWqfLrdXA2WOhNqLn4yocOCrKsYA4IJBEYMdmx7QzYhsgZL2D71C+P7+5wcwG49khiUzMQrV2IafmVa3T5U5fwrEnJ1L5RCt3uaQTJR0i6a4xdzGigkC9BHhkaVja1tork6thqvVsc/omzisqMgStXo+UtPWwdk2ihcAwCDCxzjB0aqOs9TGyXI3+WvXWerZ5U0n7SzpcEhMYtXsNrxCAwCYCDFu6CUX4N7X2yqzVMJf6vNazzT4HcupTO9PLTI6Zna3C78UECIGCBKaHcJ2eqKXPHTbHuhhKtp7rvznyI7VOhnIeVl79RtIJzdgjNU04VbDJYNVDJzAG57/l0EWair/WXpnURjhSuemzTXIuvjmocUjpqUMFbyFwYwI29/qjmkdqfl7RjUCXTk0nu8uNN3uwn0xPJ1vbdMfHSHpK8wQJ0zkPI0Wnp3O2gZYiGbAusdi22BTVNlW1bSMLBKohMH3375UV7bRcjx3WAXiRM+RaezhqPNus9b6T6ySdKqm2IaWradDYkPkE2jt8LYFPr6jBn74jm4l14jf+Xa+RM13u/P082re1PnlS65DS0fKHeDoQYGKdDvAKFKVXZjnotZ5ttkMU13a2WevYE61etQ0pvdzeyK+LE6h1CNcxjMpWa69Mn6OycbZZ/BC0VAC1jj5Z65DSS4nLj/shwMQ6/XD2Wgu9Ml4k59fD2eZ8PtG+Nb0e2Fxjt2vtXW7ei1S21pOXaPkzmnjsLP9BzY5yWkU7ytWSPi/ppZLspq9aFhto5I8lvUPSf1akl904+hlJL5F05wGIdQdJfy7po5JsDIhIjUSXWGzEvr+XZEPe2pgdtSxmlJ8n6eOS7L6RLowilf1xcyy4ey1CsR35Cews6anNJDS/qmhn+C9J/yjpMZJqmj631sbmZ01jc+DAG5taTZmN5f9pSS+WdKf8h6Xe1mA3MD9C0rslWQMaqUFPjWWDpPdKsm1jgcANCFh32P0kvb559MSSJTXRIpWzm2W+JOmVku4labMbbPVw/2l7Zd4sqbZemS9IepmkvYcrz7qR29nm8yV9QpI9VRJpn+kSy4+aIW8PkGSzANayWI+T9TxZD9TQH2H+XGXa1JJjvW9H7RPr2PS59ghXLUut0x2P/fGm6elyuTEz/t7aPt485AmM3hUfMxHmIFDjACerB8ywR7VqWHjkrAYVl98GHs1cnlnJEkMcxtx6Rq0XiqVyAjtUOsTpRZL+WZKd5dujPbUs1ivzRElHS7qgoq7h6SFOa+qVyZ13dpOdDZn9vyXVNGT2ZVNDZtc0Ic70kNnnBN9/X507eam/DIF7SDpE0kmS7JGQLtf0opS1exK+JemNzaM7ds9CDYvdk7CvpL+WdIokc+ZRmHeJw3plvi7ptZL+QFItvTKlc24fSS+vbN+2PPu2pDc1+7bd31LD0u7br5L05YD79idrgMw2SNs280zbNSm7a7rLgTtSWXsUp502c9eKhJ6e7vgXFelV63THUVNvDHlUU+9AtCGlvxI1sYlrfQI2Bv3/lHRiBXelTpsOm6zkbZIeIqmmqUztzK22XpnpM7f9JNVy5rb+3hfvF+3ZJj1J8bSZFZH1iFnPmPWQfUOS9ZhNHwf7eP/ZWYHxWUwCdufpf5P0Hkk2m1kfCdLHOtqz/OdKumNM9ElRtddu31fhtduPSHqmpJrOzpJEDlyIe0kCizMjNBtd1aaktqmpL+7p+G4nWp7L3ST9naQfNvGbqTmjGXflsZWNu+LJbc267O5Se1bYrtXU9KywJYhdrqjtWWHrlfmLSntl3i7poZJsQBuWYRGws00b4+N1zdlmTWN82LV1u8b+e5WN8WE9ajbGh90bketEzJh5LJZfllvr3W/Wjrxa+xgfyUy3bq7l2xCu5pxyCd93vTZa2L9VOlqY9cr8bcW9MrsnZzMFoxKws00b5dPONmsa5dPuuj9CUm1nm9bTZkNKW8+bPT3hcfw+zjE57QmVlJhqGeWzE0q7ue1ZlY4Xbt1BNl643aRYy9L2yjCCWy2Kjns7GFFyWPq3Q0pbj1zqoFE/cHx0+vGJjf9qw2CjK9qQ0kOZ5yM5a2yHezAT6yTz67ug7XD7VzixTq1juPedH7WtjzklhqXoshMYfVHSLk6baDeettf7VzfoXf+3+RdsHgabj2HwQ0rbxDpPY2Idp7TLX40dBGvtlalxFrf8GTHONUyfbdY2q2SNZ5vWULYTGH1v6pq8PZ5rcxj8ifN4HPd1OvtfzyzYjeI2Q6PN1DiI0QttkJo/ZGKdwRw1227QwyqcWMemO7abbmqa7ngwiVVZoO3ZZo2Xv6o525zKObunzEaCzbVYg7xe453je7v0YZdAbMrzMDclM7FOrjTLUy8T6+ThSq3jIMAERuPQed5WvqKQAZg2FdY7YGPh2HTUu80L1vs7u/5xb0k2nrKNqFTTEK5fk/S/JFkXTy1DuLbTHdvjKqdKqulRqHa645oehfLeX6kvLwGbLtcega1hutzpBqY92+QR2Bvnz7MDGIBprey9PTZpj08+KMfAZO3EOh+QdF7AjV8NY9H/24l1/szx7tAbp0v/n9Q6GIrp2j5T+1fN/Qp2zwJ/MIiQA2YEartMYPucPYLHIFiT4/i9greB9oirPepqj7zao6/Ji91Y8bHmoLtooxr5d9MT6zxAUk0T61ivTG3DoUbOJWIrcx0U7uW5t2ebYx4G2yZoG0Iu2qiEduPno5dxAXZNwQawGcIGrhfjpc30m89wfAxkGZa5ftv2yhwp6dxKtFpPS76vY59Ex3p0tOF77WzThvOtaXry9Y7bDx/g5VSbJfd31tuw+0s6f+ANij0KwsQ69RxkaDDQkhyInwN2tmkT/IxlKmy7X2xoeWmXvW08npmLzdx2yQA36jeSjpf0nMom1tle0qMk1TaxztB2GuId3oEOzcpr9ktJR0l6giS7L6nGxdocG29gSPlm8e67Wgybxe0nA9oQG4npbyRZV8zgR0yaEqPWiXWGtIMQ67AOaOgVXy97WqydwMgaH3uarJbFBryziZlyTmDkneM2H8HNpgV4a/DGv51Y50WSfnc68IG/b6c7rm1iHe+Epb74B3k0QqNFc6CdwOggSbcY+DF8Ovx2SGnPCYwWZbrs797ZBm43lFk3+rIV5P79T5vu78dVNqeyjSxmjy0d6zjLVW4tqD/e/oEmaFJDDljvgI1RcmgzxkwtvQP2lNkDm/lvbPuiaWWDCW28NFNqaMPVQOwZ789Jeqmku7fupILXWifWWa0f/8fbydEETYaWA9Y9bVPtHijJLk3XsrRDStv4/tb4RtDl+QbXuitKBWNPHHxQkp3l5xy/ue8ksgEYDm7O8od4Y2WpfGC95fZF2MM+Wg5cI8lG/Dyk6R3o+ziea33TQ0p/v2D7a22/rKu9L+Gtu+dkSTaeso2oVEt3T60T6/SVF6ynv30Q1rAeag5UNV3ulLuwIaVfUmBIabvxP3t3xAXNmbCdEd9yaqOH/rbWiXWGenAgbho2cmA8OXB5MyGO9Q7cdeiNyVT8dmP4/pIOl3RW5pNzuxThfvZvA0K0E+v8PhPruPPlIOefszCFKTkw7BxoJzAKNV3uVMOe+nbvZmrzL2Qalt+lgbIRhuyudru7fZfULQ1YrtbpjjnYDftgh37oRw6snQPT0+XuGrBdSQ3Jbop8ZPN03C+cTt6TDYCd6b9RUq0T69Q03TEHi7UPFrCBDTlQdw7UOIGR3T9nU6HbIETWFqfmcHLBq1JtTLBytU6sYxN1/L/GLdpwwvzBgBwgB5bNgaMrm3BsegKjTtPlBmrHrC3GACwhyJ6SXtzcRNIFXir0XOXObG4esZtItlyCBz+FAAQgMI/AXs3jeCdmuhad65i4Xr32GN5hzY139jTXEJcubViycxhSD8C2U3dW2kAT6yXFUL6v9VrXEHdCYobAWAjcqhm7xXoTbFjfoRwv14vzwql72WyM/6EsGIAZStlZvt2UeIKkKytKUjvLtx3PbgbZesZ28xEEIACBvghs3gzSY4/j2aA9Xa5Hr9dA9/m9bYcN4Wu9Azakb+QxazAAktrnJ00weySkz2TJua7p511ttkAWCEAAAlEJ3KbpHbARXu16e85jY5912/TG9qSbjWcTbdTa0RqAWifWac/ybYjk7aPu6cQFAQhAYA4BmxDn3s1EP3Y2vaESQxBtAqPRGAC7SSPyDEupjrTWMa/nHBv4CgIQGBmBnSqdI+W8qTltbl5A06oNQK0T65xbOGkK5CmrhAAEILCRQPTpcod0MleVAaDbiCMEBCAAgXER2L25aduus19WyaUCMxE24Y7dtJ3zcu7gDUCtE+vYdMdRbxwZ1+GFrYUABIZCIMp0uam9AGuVm76h23MCo8EZgFofHWlvDhnCoyNDORgQJwQgMG4C0490X1FR70B7s3fXR7oHYQBqnVinne7YxhwY0uAR4z6ksPUQgMAQCbSPe/cxXe5aZ/I5Pu8yqFtYA1Dj8JGrB4iw3gwWCEAAAhDon8AYhnXfah2sYQzA9HSFZ1fUVVPrdMfr5BVfQwACEBgMgen2x2u63Bxn+8vW+ZtmRFvrZb79DDWKGoBaHdj0JBFMrDMj6/gIAhCAQGACNfZAm3mYbptsbJwiBsC6wn9e0Vn+pZKOk/QMSbsETmpCgwAEIACB5QjYPWhPkHSUJBvWd9mz8Ki/t23pMsJiNSBSBJqePne96yzLpRu/hgAEIACBiARqfQotpQ0cnQGYPtPfv5kmmFcJBjAgB8iB1TnwsGYQGxvIpta/F0j6uCS7Ez+lER1ymdFt8JDFIvbx7aBojubkADmQKwcwACN0fbmSiXo5UJED5AA5MJwcwABgAMgBcoAcIAfIgRHmAKKPUHQc+nAcOlqhFTlADuTKgU7PEOYKinpJeHKAHCAHyAFyIF8OXGmPaPyMM2B6QcgBcoAcIAfIgVHlgE1VrM8j+qhEx1Hnc9SwhS05QA4MJQc+YwbgLzEAGABygBwgB8gBcmBUOfAiMwC7dRxLeChuhzhx5uQAOUAOkAPkgHT59JD3f4PzG5XzYwfgIEgOkAPkwHhz4E129t8uO0g6AxOACSAHyAFygBwgB6rOgdMkbd82/u3rnSWdj/BVC4/jH6/jR3u0JwfIgV9I2r1t9Fe/3lHStzABmABygBwgB8gBcqCqHDhF0u1WN/qr/99Sks2OdB7iVyU+7h/3Tw6QA+TA+HLgp5KeJukmqxv7ef/bjx8s6VBJR0r6pKQTZ/ylJtR1M+qaVT+fzeYOF7iQA+QAOTD8HLC2MLUdPVbS6r9jJL1b0iGS7iNps3kNfdfvUgO/quuKKQ8BCEAAAhAYOAFrC1Pb0eKbnho4BqC4dAQAAQhAAAKFCWAACgvA6iEAAQhAAAIlCGAASlBnnRCAAAQgAIHCBDAAhQVg9RCAAAQgAIESBDAAJaizTghAAAIQgEBhAhiAwgKweghAAAIQgEAJAhiAEtRZJwQgAAEIQKAwAQxAYQFYPQQgAAEIQKAEAQxACeqsEwIQgAAEIFCYAAagsACsHgIQgAAEIFCCAAagBHXWCQEIQAACEChMAANQWABWDwEIQAACEChBAANQgjrrhAAEIAABCBQmMEoDkDqJEOXSZ46CHezIAXKAHKgnBwp7l3pAslOgJTlADpAD5MCQcqC4AfhNh7mMhwSaWDkwkAPkADlADkTJgcuKt/6SfooBUJSEIA4OTuQAOUAOjCMHzoxgAD6NAcAAkAPkADlADpADvebApyIYgFcgeq+i4+7H4e7RGZ3JAXJgXg68PIIBuJukDZgATAA5QA6QA+QAOdBLDlibe5cIBsBi+DdE70X0eW6Q7zhbIAfIAXJgHDlwQpTG3+L4fUnXYgIwAeQAOUAOkAPkQNYcuEbSvpEMgMXydkTPKjrOfhzOHp3RmRwgB+blwFuiNf4Wz5aSPokJwASQA+QAOUAOkANZcuATkraIaAAspu0lfQbhswg/zxHyHWcM5AA5QA7UnQN2r912URv/Nq6bSHor9wRgAjCC5AA5QA6QA51zwK75v1mSta2DWe7RXBK4jgTonAA4+7qdPfqiLzlADqzOAWs7rct/78G0+vJ3sYgAACAASURBVDMCvaOkz2ECMAHkADlADpAD5MBCOWBtprWdVSzv7iD6swMSOL7D9hxQcHtWO8xF/7+6YMxrrXr3Dhr8YK1Ke/z8hR3ityduoi1dngIyFqUXy4lF94fVv7NcjLakzjFvA8yUWuzYuJrtov/bMTnaYm3XovGv/p21mdUsGIBJImAAfNIaA+DD0asWDIAXSZ96MAA+HLvUggFo6GEAMABddqRZZTEAs6iU+wwDUI79rDVjAGZR6fczDEDDGwOAAfDe9TAA3kS71YcB6MbPuzQGwJvo8vVhABpmGAAMwPK7z/wSGID5fPr+FgPQN/H568MAzOfTx7cYgIYyBgAD4L3DYQC8iXarDwPQjZ93aQyAN9Hl68MANMwwABiA5Xef+SUwAPP59P0tBqBv4vPXhwGYz6ePbzEADWUMAAbAe4fDAHgT7VYfBqAbP+/SGABvosvXhwFomGEAMADL7z7zS2AA5vPp+1sMQN/E568PAzCfTx/fYgAayhgADID3DocB8CbarT4MQDd+3qUxAN5El68PA9AwwwBgAJbffeaXwADM59P3txiAvonPXx8GYD6fPr7FADSUMQAYAO8dDgPgTbRbfRiAbvy8S2MAvIkuXx8GoGGGAcAALL/7zC+BAZjPp+9vMQB9E5+/PgzAfD59fIsBaChjADAA3jscBsCbaLf6MADd+HmXxgB4E12+PgxAwwwDgAFYfveZXwIDMJ9P399iAPomPn99GID5fPr4FgPQUMYAYAC8dzgMgDfRbvVhALrx8y6NAfAmunx9GICGWRcD8BeSbhns71Md5nke6nTA0TS4ZwcNbO730ssLO8T/nmD7g+WGxbR6TvNF/zcWpRfLiUXjXf07y8Vo+8fYDIAdk6NpYG3X6lxZ9H9rM6tZDu8AYlFgQ/ndwwqqeh06bNwh/7OgBu2qn48Wmw6OxqL0YjkxlGNIzjivLSiEHRtzbtuQ6rY2s5rlUITdlNj7FlT1QnTYqMOXCmrQrvqJaLFpn/jTFkrB11PQY6Me5xfU4D5osGmfeE1BHdxX/TyE3STsHdzpLl4hZzkrZxgfWRxZtl/uzz6xaZ94aDbKi1f8r+ixUY/vLo7M/Ze7ocGmfeI57nQLVvhHCLtR2F9JuklBHY5Dh406vKGgBu2qd0GLjVpskHS7FkrB1zejx0Y9jimogR0b7Rg5pK76XLHuV1AH91VvJem3CKvSZ55cd145uEQ447SdjB4Z6XvuR5u0Crn+vLJv2J3rJRd6Ylbayq1LipBj3R/FAOhpOcAuUac9Omc3+eRyrUOo1+6D2GYJZjl/+paRa2H5YmfeEZabSrpo5HpcI2nXwmI8c+Qa2D5hPbXVLWO/DGA310RoeP5l5DvY6wPtWXY/yNUj1sO2vXSDM50OY78M8OFpGIXe25nveSPeJ8wAPLAQ++yrPXnEwr4sO93FVmB32o61F+BSSTsvhqm3Xx054n3i/b1RXmxFdl/GZSPVw44JJZ9QmlboFSPVwBr/L06DqO39XSRdMUJxvy1py0BivmOEGtjO9eeBNGhD2UHS2SPU49xm4JaWQ5TX545QC9s33hpFAElbSPrmCHW4UtLdAumQJZSxPRJ4iaS9s5BMr3RbSaeObAeze1A2S0eWteQjJNn1VzsQj+HPuv5Ljog5T0zLkY+NRIc2174hye6BiLTsI8l67NoYx/Ba1aN/85LJrsOOQdDLJT1oHoiC391G0hkj0eGkIPdfzJP7SZLGMFKjPfZX+mbYeTrYd9YYWlfsGI5RP5J02/WAFPre7hsbS4+xDZY3quVZld8A9UtJlsCRlx0lfb7yA53d2LRdZBGmYjuw8rOeX0s6aGp7I7/dXtKxle8bdk9WtHtiVufEAySdU7EOdu/FIas3eiz/P6TSs1B7ltVuKBrCYmM02N3Pdv2ppjMeG1DEJpmJ2u2/Vm7Y5aKvVKaF5ZUNtbvXWhsd9HPLnRdLsst4Ne0btq+/Kdh9SfNS4PaSTqhMA8snGwfkwfM2fAzf2c1xL6hgUBTrvj1RUpRBZpbNnT0lfUCSnaUN+WB3gSS7ydEucQx1sYbHxsf/2sC1sDyybXj8AI3YdO5YT9k7JQ19Lg3bt+2pkz2mN25A7/9Y0mcruFRmDb8NyhbpxvAQaWDDH6Y2PtYAn9nh7786rNtGMys5xr+neNZdfkQHFhd30MD062JAbAIN69GoabmrJGOaul+c1UEPK5u6XovZYq9psdyyHEtlYrnd5RjVJQ9snx7KpbD1csaOtXbMTdXBjvVddOhyr05VQ/yuJ9Sy39t1t1RRbRSvLsv9O6z7C11WHLDsX3Vg8dqO2/NPHdb92I7rjlq8iznt0hNiZVP3R4u5xsVyLJWJ5XaXxfat1HXbPl3TYsfcVBZ2rO+ydBkx0to4ljUIYADWANPzxxiAnoGvszoMwDqAevwaA9Aj7DmrwgDMgTPUrzAAMZTDAMTQoY0CA9CSKP+KASivgUWAAYihg2sUGABXnMmVYQCS0WUpiAHIgjWpUgxAEjb3QhgAd6TlK8QAlNfAIsAAxNChjQID0JIo/4oBKK+BRYABiKGDaxQYAFecyZVhAJLRZSmIAciCNalSDEASNvdCGAB3pOUrxACU18AiwADE0KGNAgPQkij/igEor4FFgAGIoYNrFBgAV5zJlWEAktFlKYgByII1qVIMQBI290IYAHek5SvEAJTXwCLAAMTQoY0CA9CSKP+KASivgUWAAYihg2sUGABXnMmVYQCS0WUpiAHIgjWpUgxAEjb3QhgAd6TlK8QAlNfAIsAAxNChjQID0JIo/4oBKK+BRYABiKGDaxQYAFecyZVhAJLRZSmIAciCNalSDEASNvdCGAB3pOUrxACU18AiwADE0KGNAgPQkij/igEor4FFgAGIoYNrFBgAV5zJlWEAktFlKYgByII1qVIMQBI290IYAHek5SvEAJTXwCLAAMTQoY0CA9CSKP+KASivgUWAAYihg2sUGABXnMmVYQCS0WUpiAHIgjWpUgxAEjb3QhgAd6TlK8QAlNfAIsAAxNChjQID0JIo/4oBKK+BRYABiKGDaxQYAFecyZVhAJLRZSmIAciCNalSDEASNvdCGAB3pOUrxACU18AiwADE0KGNAgPQkij/igEor4FFgAGIoYNrFBgAV5zJlWEAktFlKYgByII1qVIMQBI290IYAHek5SvEAJTXwCLAAMTQoY0CA9CSKP+KASivgUWAAYihg2sUGABXnMmVYQCS0WUpWMoA3FrS9Yl/Z2chUb5SDEB5DSwCDEAMHVyjwAC44kyuDAOQjC5LwVIGYHNJ1yQagG9lIVG+UgxAeQ0sAgxADB1co8AAuOJMrgwDkIwuS8FSBsA25nuJBuDoLCTKV4oBKK+BRYABiKGDaxQYAFecyZVhAJLRZSlY0gAcmmgAHp2FRPlKMQDlNbAIMAAxdHCNAgPgijO5MgxAMrosBUsagFtJunhJE/BNSXb5oMYFAxBDVQxADB1co8AAuOJMrgwDkIwuS8GSBsA26ABJ1y5oAi6TtFcWCjEqxQDE0AEDEEMH1ygwAK44kyvDACSjy1KwtAGwjTpQ0qXrmICfSrpXFgJxKsUAxNACAxBDB9coMACuOJMrwwAko8tSMIIBsA3bWdI7JdkjftOPB57ejB2xbZatj1UpBiCGHhiAGDq4RoEBcMWZXBkGIBldloJRDMD0xu0k6U6Sdpj+cATvMQAxRMYAxNDBNQoMgCvO5MowAMnoshSMaACybOgAKsUAxBAJAxBDB9coMACuOJMrwwAko8tSEAOQBWtSpRiAJGzuhTAA7kjLV4gBKK+BRYABiKFDGwUGoCVR/hUDUF4DiwADEEMH1ygwAK44kyvDACSjy1IQA5AFa1KlGIAkbO6FMADuSMtXiAEor4FFgAGIoUMbBQagJVH+FQNQXgOLAAMQQwfXKDAArjiTK8MAJKPLUhADkAVrUqUYgCRs7oUwAO5Iy1eIASivgUWAAYihQxsFBqAlUf4VA1BeA4sAAxBDB9coMACuOJMrwwAko8tSEAOQBWtSpRiAJGzuhTAA7kjLV4gBKK+BRYABiKFDGwUGoCVR/hUDUF4DiwADEEMH1ygwAK44kyvDACSjy1IQA5AFa1KlGIAkbO6FMADuSMtXiAEor4FFgAGIoUMbBQagJVH+FQNQXgOLAAMQQwfXKDAArjiTK8MAJKPLUhADkAVrUqUYgCRs7oUwAO5Iy1eIASivgUWAAYihQxsFBqAlUf4VA1BeA4sAAxBDB9coMACuOJMrwwAko8tSEAOQBWtSpRiAJGzuhTAA7kjLV4gBKK+BRYABiKFDGwUGoCVR/hUDUF4DiwADEEMH1ygwAK44kyvDACSjy1IQA5AFa1KlGIAkbO6FMADuSMtXiAEor4FFgAGIoUMbRSQD8AhJR0j6pqQzJZ0i6V2S7t0GW/krBiCGwBiAGDq4RoEBcMWZXBkGIBldloIRDMCukk6WdP0afxskHS3J9uGaFwxADHUxADF0cI0CA+CKM7kyDEAyuiwFSxuAPSWdu0bDv9oQWM9AzSYAA5AlxZeuFAOwNLL4BTAAMTTCAMTQoY2ipAHYQtJpCzb+rRmwnoBaFwxADGUxADF0cI0CA+CKM7kyDEAyuiwFSxqApy/Z+JsJsMsBtd4TgAHIkuJLV4oBWBpZ/AIYgBgaYQBi6NBGUdIAnJRgAMwE2I2BNS4YgBiqYgBi6OAaBQbAFWdyZRiAZHRZCpYyAJtJuiLRAHw1C4nylWIAymtgEWAAYujgGgUGwBVncmUYgGR0WQqWMgA7JDb+1gNwVhYS5SvFAJTXwCLAAMTQwTUKDIArzuTKMADJ6LIULGUAbtPBAFjMNS4YgBiqYgBi6OAaBQbAFWdyZRiAZHRZCmIAsmBNqhQDkITNvRAGwB1p+QoxAOU1sAgwADF0aKPAALQkyr9iAMprYBFgAGLo4BoFBsAVZ3JlGIBkdFkKYgCyYE2qFAOQhM29EAbAHWn5CjEA5TWwCDAAMXRoo8AAtCTKv2IAymtgEWAAYujgGgUGwBVncmUYgGR0WQpiALJgTaoUA5CEzb0QBsAdafkKMQDlNbAIMAAxdGijwAC0JMq/YgDKa2ARYABi6OAaBQbAFWdyZRiAZHRZCmIAsmBNqhQDkITNvRAGwB1p+QoxAOU1sAgwADF0aKPAALQkyr9iAMprYBFgAGLo4BoFBsAVZ3JlGIBkdFkKYgCyYE2qFAOQhM29EAbAHWn5CjEA5TWwCDAAMXRoo8AAtCTKv2IAymtgEWAAYujgGgUGwBVncmUYgGR0WQpiALJgTaoUA5CEzb0QBsAdafkKMQDlNbAIMAAxdGijwAC0JMq/YgDKa2ARYABi6OAaBQbAFWdyZRiAZHRZCmIAsmBNqhQDkITNvRAGwB1p+QoxAOU1sAgwADF0aKPAALQkyr9iAMprYBFgAGLo4BoFBsAVZ3JlGIBkdFkKYgCyYE2qFAOQhM29EAbAHWn5CjEA5TWwCDAAMXRoo8AAtCTKv2IAymtgEWAAYujgGgUGwBVncmUYgGR0WQpiALJgTaoUA5CEzb0QBsAdafkKMQDlNbAIMAAxdGijwAC0JMq/YgDKa2ARYABi6OAaBQbAFWdyZRiAZHRZCmIAsmBNqhQDkITNvRAGwB1p+QoxAOU1sAgwADF0aKPAALQkyr9iAMprYBFgAGLo4BoFBsAVZ3JlGIBkdFkKYgCyYE2qFAOQhM29EAbAHWn5CjEA5TWwCDAAMXRoo8AAtCTKv2IAymtgEWAAYujgGgUGwBVncmUYgGR0WQpiALJgTaoUA5CEzb0QBsAdafkKMQDlNbAIMAAxdGijwAC0JMq/YgDKa2ARYABi6OAaBQbAFWdyZRiAZHRZCmIAsmBNqhQDkITNvRAGwB1p+QoxAOU1sAgwADF0aKPAALQkyr9iAMprYBFgAGLo4BoFBsAVZ3JlGIBkdFkKYgCyYE2qFAOQhM29EAbAHWn5CjEA5TWwCDAAMXRoo8AAtCTKv2IAymtgEWAAYujgGgUGwBVncmUYgGR0WQpiALJgTaoUA5CEzb0QBsAdafkKMQDlNbAIMAAxdGijwAC0JMq/YgDKa2ARYABi6OAaBQbAFWdyZRiAZHRZCmIAsmBNqhQDkITNvRAGwB1p+QoxAOU1sAgwADF0aKPAALQkyr9iAMprYBFgAGLo4BoFBsAVZ3JlGIBkdFkKYgCyYE2qFAOQhM29EAbAHWn5CjEA5TWwCDAAMXRoo8AAtCTKv2IAymtgEWAAYujgGgUGwBVncmUYgGR0WQpiALJgTaoUA5CEzb0QBsAdafkKMQDlNbAIMAAxdGijwAC0JMq/YgDKa2ARYABi6OAaBQbAFWdyZRiAZHRZCmIAsmBNqhQDkITNvRAGwB1p+QoxAOU1sAgwADF0aKPAALQkyr9iAMprYBFgAGLo4BoFBsAVZ3JlGIBkdFkKYgCyYE2qFAOQhM29EAbAHWn5CjEA5TWwCDAAMXRoo8AAtCTKv2IAymtgEWAAYujgGgUGwBVncmUYgGR0WQpiALJgTaoUA5CEzb0QBsAdafkKMQDlNbAIMAAxdGijwAC0JMq/YgDKa2ARYABi6OAaBQbAFWdyZRiAZHRZCmIAsmBNqhQDkITNvRAGwB1p+QoxAOU1sAgwADF0aKPAALQkyr9iAMprYBFgAGLo4BoFBsAVZ3JlGIBkdFkKYgCyYE2qFAOQhM29EAbAHWn5CreTdH3i34Udw79/4notXkvGmhYMQCw1MQBx9MAAxNACAxBDB9coNpN0RWJD/IOOkWAAJgAxABMWEd5hACKosBIDBiCGFhiAGDq4R/GdRANwfMdIMAATgBiACYsI7zAAEVRYiQEDEEMLDEAMHdyjeF2iAXh6x0gwABOAGIAJiwjvMAARVFiJAQMQQwsMQAwd3KPYUdKlS5qAn0jaumMkGIAJQAzAhEWEdxiACCqsxIABiKEFBiCGDlmieIykDQuagKslPdghCgzABCIGYMIiwjsMQAQVVmLAAMTQAgMQQ4dsURws6cp1TMCvJB3gFAEGYAISAzBhEeEdBiCCCisxYABiaIEBiKFD1ijuJOkoSb9eZQQukvReSbdzXDsGYAITAzBhEeEdBiCCCisxYABiaIEBiKFDL1FsI2lvSX8k6e6StsiwVgzABCoGYMIiwjsMQAQVVmLAAMTQAgMQQ4dqosAATKTEAExYRHiHAYigwkoMGIAYWmAAYuhQTRQYgImUGIAJiwjvMAARVFiJAQMQQwsMQAwdqokCAzCREgMwYRHhHQYgggorMWAAYmiBAYihQzVRYAAmUmIAJiwivMMARFBhJQYMQAwtMAAxdKgmCgzAREoMwIRFhHcYgAgqrMSAAYihBQYghg7VRIEBmEiJAZiwiPAOAxBBhZUYMAAxtMAAxNChmigwABMpMQATFhHeYQAiqLASAwYghhYYgBg6VBMFBmAiJQZgwiLCOwxABBVWYsAAxNACAxBDh2qiwABMpMQATFhEeIcBiKDCSgwYgBhaYABi6FBNFBiAiZQYgAmLCO8wABFUWIkBAxBDCwxADB2qiQIDMJESAzBhEeEdBiCCCisxYABiaIEBiKFDNVFgACZSYgAmLCK8wwBEUGElBgxADC0wADF0qCYKDMBESgzAhEWEdxiACCqsxIABiKEFBiCGDtVEgQGYSIkBmLCI8A4DEEGFlRgwADG0wADE0KGaKDAAEykxABMWEd5hACKosBIDBiCGFhiAGDpUEwUGYCIlBmDCIsI7DEAEFVZiwADE0AIDEEOH7FHsJem1ko6XdLKkj0o6RNIezmvGAEyAYgAmLCK8wwBEUGElBgxADC0wADF0yBbFzSUdLWmDpOtn/F0t6V2StnKKAAMwAYkBmLCI8A4DEEGFlRgwADG0wADE0CFLFLeW9L0Zjf4sI3CSpG0cosAATCBiACYsIrzDAERQYSUGDEAMLTAAMXTIEsWJCzb+rSF4v0MUGIAJRAzAhEWEdxiACCqsxIABiKEFBiCGDu5RHLhk428m4DpJ9+wYCQZgAhADMGER4R0GIIIKKzFgAGJogQGIoYN7FB9LMABmAux+gC4LBmBCDwMwYRHhHQYgggorMWAAYmiBAYihg3sUFyYagG92jAQDMAGIAZiwiPAOAxBBhZUYMAAxtMAAxNDBNQq7o3+tu/7b6/1rvZ7bMRIMwAQgBmDCIsI7DEAEFVZiwADE0AIDEEMH1yi2Tzz7N1NwUcdIMAATgBiACYsI7zAAEVRYiQEDEEMLDEAMHVyjwAC44kyuDAOQjC5LQQxAFqxJlWIAkrC5F8IAuCMtXyEGoLwGFgEGIIYObRQYgJZE+VcMQHkNLAIMQAwdXKPAALjiTK4MA5CMLktBDEAWrEmVYgCSsLkXwgC4Iy1fIQagvAYWAQYghg5tFBiAlkT5VwxAeQ0sAgxADB1co8AAuOJMrgwDkIwuS0EMQBasSZViAJKwuRfCALgjLV8hBqC8BhYBBiCGDm0UGICWRPlXDEB5DSwCDEAMHVyjwAC44kyuDAOQjC5LQQxAFqxJlWIAkrC5F8IAuCMtXyEGoLwGFgEGIIYObRQYgJZE+VcMQHkNLAIMQAwdXKPAALjiTK4MA5CMLktBDEAWrEmVYgCSsLkXwgC4Iy1fIQagvAYWAQYghg5tFBiAlkT5VwxAeQ0sAgxADB1co8AAuOJMrgwDkIwuS0EMQBasSZViAJKwuRfCALgjLV8hBqC8BhYBBiCGDm0UGICWRPlXDEB5DSwCDEAMHVyjwAC44kyuDAOQjC5LQQxAFqxJlWIAkrC5F8IAuCMtX+EtOswGeKWk93X4+1iHdZ9cHp1rBK/qwOKbHTQw/X7cYd1/4kohRmWbS7KprteaBnu9z/9vBz2s7Hr1r/W9xbxZDISuUViOrbXN631uud3lGGX71nrrWOt726drWuyYu9a2rve5Heu76GBtzXrrWOv7HWoSwWtb9pL0t5J+2QHsWsD7+vx7Tdf5Lb2g9FzPTSQ9WdJnJF07UB1sxzxO0n/vmV2O1e0m6U2SfjZQLWy/O0vSGyXtmgNQz3X+jya3uhz8+zoWzVqP7dO2bz9Jku3rQ1xu1Rxj7Vg7axuH8NkFTVtnbd7olx0bJzbUBmdWwl0k6UUD28keLmnIO9UsHU6S9HsD3MO2axrNywd8kFuth23LGyRtO0A99pX07xVpYdp8R9L+A9JiC0kvkWTH1tW5NdT/rc2zXghrA0e52I5lZwhDFXC9uK0B2im4snYmcKik6yrV4RpJhwTXYDq8320Ozuvl1lC/P03S70xvcPD3z5J0VaX7xgZJhw3gROXWTc/FUHN+vbjPlnS/4PuBe3jWnTbUrrT1BJ3+3q757eJOz6dCc9UfqfTgNq2BvX+rD7KstdxL0sUj0MPO4u6ZlaRP5e8YgRa2b/xLYBNwe0k/GYEO1hbWcNlyoT3v/pJ+OwJR20bIutui3fhhN2f944g0MC1evlB2lvnRnh1v9GtzbSiv50jaowzqhdba5SmYoWgwHef7F6LS74/sXqrvjugYZW3iH/aLuP+12V3+vxiRqO1O9k/9o567xqePUAO7zLHfXCplvrSemK+PUI+vBT3ztBOUWi+JtcejWa9PKZP+a6712BHuE2aMh3oT+ZpCTn8xtrPO6R3tkdMgCr63SxK/GuHOZVr8QNI2BdnPWrX1TEznyZje/+UsIAU/u6mkH45UD7v8tHNB9tOrfvRINbB9/x+mQdT0/k4jddbtAd26syI8F/2uEe9cpsWzA+1UNxuxGTMtrNGxwb+iLM8b+b7xtgBC2DHy+yPWwZ4OGNKNsgunjD3n3zaGY3192MK08vzw5pIuHbkOpwcxYqbwC0euhR0Hnp8n1Zeu1QZcOmPkelwiyUxpyeURI9fA9onDSwqQY93m6oY8yI+XYTkiB9wl6nwiO9dGExplfIBT0ENRRtG8D1ps3DdKj6b5f9BB5wc6SVmieVn7p/bYj1cjOuR6bFS3kovd7Ttkfl6xR7j2bGdaV6PHRgYRLgOM+V6M6f3q70seoCofG2aa83rv9y6sg+vqn8mBblPDW3JwoG+jw0YdjnHN7rTKHoQWm/aJB6YhdC01xrvOZzVCNt9AqcVuQpwV0xg/sye1qlm6TC5Tm/j7FFT1PHawjQcYG6Wx9PI4tNh0sLcZ9kovtQ33m3rctJknSy30FE8M0CtLiZBjve/kYLfpYPfQHIAXrJMu55UdzOY9KL08h31i0z5hLEovY77zfNos2NDHpRY7Nk7HMub31mZWs7y7g7A2YYKdLUX6O7XD9hxQUNXUHcoeTYnE32Lp8siWjQdQeunyBMAJAfWwmFLzy1iUXiwnUuO3XIy2f6ROsGZzBJRa7NiYqoEdk6NpYG1X6vZYm1nN0sUARHpuuxXk+A7CDtEAWM9BtGX3DhoM3QC8PZoYkiym1IPd0A2A5WK0JbW3b6gGwI7J0RZru1L3CQxAAw8D4JfWqcmIAfDToK2pSw8ABqCl6PfapQcAA+CjQ5ceAAyAjwZZaqEHYOIE6QHwSTF6AHw4etVCD4AXSZ966AHw4dilFnoAGnoYAAxAlx1pVlkMwCwq5T7DAJRjP2vNGIBZVPr9DAPQ8MYAYAC8dz0MgDfRbvVhALrx8y6NAfAmunx9GICGGQYAA7D87jO/BAZgPp++v8UA9E18/vowAPP59PEtBqChjAHAAHjvcBgAb6Ld6sMAdOPnXRoD4E10+fowAA0zDAAGYPndZ34JDMB8Pn1/iwHom/j89WEA5vPp41sMQEMZA4AB8N7hMADeRLvVhwHoxs+7NAbAm+jy9WEAGmYYAAzA8rvP/BIYgPl8+v4WA9A38fnrwwDM59PHtxiAhjIGAAPgvcNhALyJdqsPA9CNn3dpDIA30eXrwwA0zDAAGIDld5/5JTAA8/n0/S0GoG/i89eHAZjPp49vMQANkc+qLwAABUhJREFUZQwABsB7h8MAeBPtVh8GoBs/79IYAG+iy9eHAWiYYQAwAMvvPvNLYADm8+n7WwxA38Tnrw8DMJ9PH99iABrKGAAMgPcOhwHwJtqtPgxAN37epTEA3kSXrw8D0DDDAGAAlt995pfAAMzn0/e3GIC+ic9fHwZgPp8+vq3KANxW0tMkvU7SkZI+IenEBf9+3mFe5NMXXMeisXj87oIO2/MfBbcndTpgmyPcg5tnHV/qoMFvA2zPGR3iPytA/Ku1tJhS88tYrK6v7/8tJ1Ljt1zsO9711mf7bOr2rFd3ru/t2Jgasx2Tc8WVWq+1XanbY23mouu1ttjaZGubrY3eycvdbC7pKZK+LOm6DhuTCoFy6QkEO9iRA+QAOTC+HLC22kzpwZKsDU9aHi7pOzT6yQ6OHW98Ox6aozk5QA5EyoHTJO2/jAPYTNIhnPHT8GP+yAFygBwgBwafA3Y56DBJ1rbPXay74EMIPnjBIzlQYuGMiBwgB8iB8jlw9HqXBN5K40/jTw6QA+QAOUAOVJkDb16rC+BJCF6l4Djv8s4bDdCAHCAHouTAn642AdtLOg8DgAEgB8gBcoAcIAeqzoHzJd1s2gS8FsGrFjyK8yQOzoLIAXKAHCifA69pDcBWki7BAGAAyAFygBwgB8iBUeTAxZK2NBPwCAQfheC47vKuGw3QgBwgB6LkwMPMAPwdBgADQA6QA+QAOUAOjCoH3mMGwIb5jeJIiAMtyAFygBwgB8iB/DnwdTMAP8EAYIDIAXKAHCAHyIFR5cCFZgCuQPRRiY6zzu+sYQxjcoAciJ4D15gBSA3SCtskA/zBgBwgB8gBcoAcKJMD1hantuPJBa8y98ACAQhAAAIQgEAxAtYWYwCK4WfFEIAABCAAgTIEMABluLNWCEAAAhCAQFECGICi+Fk5BCAAAQhAoAwBDEAZ7qwVAhCAAAQgUJQABqAoflYOAQhAAAIQKEMAA1CGO2uFAAQgAAEIFCWAASiKn5VDAAIQgAAEyhDAAJThzlohAAEIQAACRQlgAIriZ+UQgAAEIACBMgQwAGW4s1YIQAACEIBAUQIYgKL4WTkEIAABCECgDAEMQBnurBUCEIAABCBQlAAGoCh+Vg4BCEAAAhAoQwADUIY7a4UABCAAAQgUJYABKIqflUMAAhCAAATKEMAAlOHOWiEAAQhAAAJFCWAAiuJn5RCAAAQgAIEyBDoZgOskXZ/wt0HSmfzBgBwgB8gBcoAcKJYD1hantuE6L7FwygopkyYU3OBGDpAD5AA54JkDl1mHxX9gAJLck6cQ1MWOTQ6QA+QAOdBnDvzQDMBHMAAYAHKAHCAHyAFyYFQ5YG2/noXooxK9T4fJujijIQfIAXIgZg48wwzAbSWl3giIsDGFRRd0IQfIAXKAHFgrB6zN39kMgC2foBeAXgBygBwgB8gBcmAUOXBC0/ZvfNmHXoBRiL6WG+RzzhTIAXKAHBhHDlwrae9pA2Dvj8T5YQLIAXKAHCAHyIGqc+AfVjf+9v9NJZ2K8FULj8Mfh8NHZ3QmB8iBWTnwLUnbzTIA9tkdJQYGwgRhgsgBcoAcIAcqy4FzJe22VuPffr6npO9WtuGznBCf4ZDJAXKAHCAHxpAD35G0R9vIr/d6M0kfxgTggMkBcoAcIAfIgcHmgM0T8CFJ26/X6M/6/r6STkL8wYo/BmfLNnIGRw6QA+TAjXPgK5L2m9WwL/vZ3SW9QtIpkn6DIcAQkAPkADlADpADoXLg100bbW21tdnZlltK2l2S3S/AHwzIAXKAHCAHyIEyOWBtsbXJSy//H3BSb/wiXXutAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name === ''){
            alert('Nome da pintura deve estar preenchido.')
        }else if(year === ''){
            alert('Ano deve estar preenchido.')
        }else if(artistId === 0){
            alert('Arista deve estar preenchido.')
        }else if(styleId === 0){
            alert('Estilo deve estar preenchido.')
        }else if(description === ''){
            alert('Descrição deve estar preenchida.')
        }else if(currentplace === ''){
            alert('Localização atual deve estar preenchida.')
        }
        try{
            const response = await api.put(`/api/v1/paintings/update/${id}`, {
                painting: {
                    name,
                    year,
                    artist_id: artistId,
                    style_id: styleId,
                    description,
                    currentplace
                }
            })
            if(response.data) {
                alert('Pintura atualizada.')
                history.push('/')
            }
        }catch(e){
            alert(e)
        }
    }

    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <Container>
                    
                    <form onSubmit={handleSubmit}>
                        <h1>Editar Obra</h1>
                        <FormsInput
                            placeholder='Título'
                            Icon={ IconSVG1 }
                            value={name}
                            onChange={(value) => {setName(value.target.value)}}
                        />
                        <SelectContainer>
                            <Select value={artistId} onChange={(value) => setArtistId(+value.target.value)} Icon={BiUser}>
                                {artists.map(artist => {return(
                                    <option value={artist.id} key={artist.id}>{artist.name}</option>
                                )})}
                            </Select>
                            <PlusButton onClick={handleArtistClick}>+</PlusButton>
                        </SelectContainer>
                        <TextArea
                            placeholder='Descrição'
                            Icon={ IconSVG2 }
                            value={description}
                            onChange={(value) => {setDescription(value.target.value)}}
                        />
                        <FormsInput
                            placeholder='Ano'
                            Icon={ IconSVG3 }
                            value={year}
                            onChange={(value) => {setYear(value.target.value)}}
                        />
                        <SelectContainer>
                            <Select value={styleId} onChange={(value) => setStyleId(+value.target.value)} Icon={ IconSVG4 }>
                                {styles.map(style => {return(
                                    <option value={style.id} key={style.id}>{style.title}</option>
                                )})}
                            </Select><PlusButton onClick={handleStyleClick}>+</PlusButton>
                        </SelectContainer>
                        <FormsInput
                            placeholder='Localização atual'
                            Icon={ IconSVG5 }
                            value={currentplace}
                            onChange={(value) => {setCurrentplace(value.target.value)}}
                        />
                        <FormsButton type="submit">Editar Obra</FormsButton>
                    </form>
                </Container>
            </Modal>
            <ArtistForms showModal={showArtistModal} setShowModal={setShowArtistModal}/>
            <StyleForms showModal={showStyleModal} setShowModal={setShowStyleModal}/>
        </>
    )
}

export default PaintingsUpdate