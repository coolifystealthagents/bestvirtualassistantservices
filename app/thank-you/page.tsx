import { Header, Footer } from '../components';

export default function Thanks(){
  return <><Header/><main className="section"><div className="container"><h1>Your role notes are ready.</h1><p className="lead">This preview form is not connected to an inbox yet, so no one has received your details. You can still use the notes to compare providers and ask for a clear staffing scope.</p><a className="btn" href="/provider-vetting">Open the provider checklist</a></div></main><Footer/></>;
}