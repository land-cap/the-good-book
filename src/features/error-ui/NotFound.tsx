import { ReactNode } from 'react'

export const NotFound = ({ children }: { children?: ReactNode }) => {
   return (
      <div>
         <div>
            {children || <p>The page you are looking for does not exist.</p>}
         </div>
         <p>
            <button onClick={() => window.history.back()}>Go back</button>
         </p>
      </div>
   )
}
