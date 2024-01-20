import { redirect, RedirectType } from 'next/navigation'

const RedirectFromOldManifestStartURL = () =>
	redirect('/mat/1', RedirectType.replace)

export default RedirectFromOldManifestStartURL
