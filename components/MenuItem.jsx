import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function MenuItem({path, page, onClose}) {
  return (
    <Link href={path} passHref >
        <Button onClick={onClose} w={'full'}>{page}</Button>
    </Link>
  )
}
