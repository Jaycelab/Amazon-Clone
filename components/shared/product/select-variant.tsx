import { Button } from '@/components/ui/button'
import { IProduct } from '@/lib/db/models/product.model'
import Link from 'next/link'

export default function SelectVariant({
  product,
  size,
  color,
}: {
  product: IProduct
  color: string
  size: string
}) {
  const selectedColor = color || product.colors[0]
  const selectedSize = size || product.sizes[0]

  //render size or color if > 0 and convert each item to a button. Creates a link to the product page with the selected size and color
  return (
    <>
      {product.colors.length > 0 && (
        <div className='space-x-2 space-y-2'>
          <div>Color: </div>
          {product.colors.map((x: string) => (
            <Button
              asChild
              variant='outline'
              className={
                selectedColor === x ? 'border-x border-primary' : 'border-2'
              }
              key={x}
            >
              {/* change background color based on above key color. Eg red render red background. Display color*/}
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: x,
                  size: selectedSize,
                })}`}
              >
                <div
                  style={{ backgroundColor: x }}
                  className='h-4 w-4 rounded-full border border-muted-foreground'
                ></div>
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}

      {/* render size or color if > 0 and convert each item to a button. Creates a link to the product page with the selected size and color */}
      {product.sizes.length > 0 && (
        <div className='mt-2 space-x-2 space-y-2'>
          <div>Size: </div>
          {product.sizes.map((x: string) => (
            <Button
              asChild
              variant='outline'
              className={
                selectedSize === x ? 'border-2 border-primary' : 'border-2'
              }
              key={x}
            >
              <Link
                replace
                scroll={false}
                href={`${new URLSearchParams({
                  color: selectedColor,
                  size: x,
                })}`}
              >
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  )
}

