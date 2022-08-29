import { ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface IPropsProtectedRoute {
    validation: boolean
    redirectPath?: string
    children: ReactElement | ReactNode
}



export default function ProtectedRoute(props: IPropsProtectedRoute): ReactElement {
    if (props.validation) {
        return <Navigate to={props.redirectPath ?? '/landing'} />
    }
    return <>{props.children}</>
}