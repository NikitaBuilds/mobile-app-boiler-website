export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 54 54" aria-hidden="true" {...props}>
      <path
        className="fill-black"
        d="M8.32012 9.37674C5.73153 12.7961 5.55546 17.094 5.79099 18.8156C10.1777 15.3105 23.1184 8.43293 39.7881 8.96353C35.2322 6.94118 30.4426 5.2432 24.6646 4.49658C18.8866 3.74995 11.5559 5.10257 8.32012 9.37674Z"
        fill="black"
      />
      <path
        className="fill-black"
        d="M32.2305 44.674C34.8191 41.2547 34.9952 36.9568 34.7597 35.2352C30.373 38.7403 17.4323 45.6179 0.762528 45.0873C5.31849 47.1096 10.1081 48.8076 15.8861 49.5542C21.6641 50.3008 28.9948 48.9482 32.2305 44.674Z"
      />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 106 40" aria-hidden="true" {...props}>
      <Logomark width="40" height="40" className="fill-cyan-500" />
    </svg>
  )
}
