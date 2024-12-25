export function RotatingBorder({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative">
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-[-4px] rounded-full border-2 border-transparent">
            <div className="absolute inset-[-2px] rounded-full border-2 border-gray-600 [background:linear-gradient(white,white),linear-gradient(to_right,transparent,purple-500,transparent)_border-box] [mask:linear-gradient(white,white)_padding-box,linear-gradient(white,white)] animate-[spin_8s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-500" />
              {/*<div className="absolute top-1/2 right-0 w-2 h-2 translate-y-1/2 translate-x-1/2 rounded-full bg-purple-500" />*/}
              <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-gray-500" />
              {/*<div className="absolute top-1/2 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500" />*/}
            </div>
          </div>
        </div>
        {children}
      </div>
    )
  }
  
  