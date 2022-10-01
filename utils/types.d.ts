export interface nftCardProps {
    data: {
      id: string;
      name: string;
      creator: string;
      price: number;
      description: string;
      image: any;
      bids: {
        id: string;
        name: string;
        price: number;
        image: any;
        date: string;
      }[];
    }
  }
  
export interface focusedStatusBarProps{
  background: string
}

export interface circularButtonProps {
  imgUrl: ImageBitmap,
  handlePress: ()=> void
}
export interface rectButtonProps {
  handlePress: ()=> void
}

export interface nftTitleProps {
  title: string,
  subtitle: string,
}

export interface imgUrlProps {
  imgUrl: ImageProps,
  index: number
}

export interface homeHeaderProps {
  onSearch: () => void
}