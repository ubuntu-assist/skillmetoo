'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MessageSquare, ChevronUp, ChevronDown } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

const initialComments = [
  {
    id: 1,
    content:
      'Excellent article! Les compétences numériques sont cruciales pour l’avenir de l’Afrique.',
    user: {
      name: 'Aminata Sow',
      avatar: '/images/users/avatar-1.jpg',
    },
    timestamp: new Date('2025-05-16T10:00:00Z'),
    upvotes: 15,
    downvotes: 2,
    replies: [
      {
        id: 2,
        content:
          'Tout à fait d’accord! Les bootcamps comme ceux de Skillmetoo sont un excellent moyen de se former.',
        user: {
          name: 'Kwame Mensah',
          avatar: '/images/users/avatar-2.jpg',
        },
        timestamp: new Date('2025-05-16T11:30:00Z'),
        upvotes: 8,
        downvotes: 0,
        replies: [
          {
            id: 3,
            content:
              'Oui, mais il faut aussi des formations accessibles dans les zones rurales.',
            user: {
              name: 'Fatou Dieng',
              avatar: '/images/users/avatar-3.jpg',
            },
            timestamp: new Date('2025-05-16T12:15:00Z'),
            upvotes: 5,
            downvotes: 1,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    content:
      'Je pense que le travail à distance est une révolution pour les professionnels africains.',
    user: {
      name: 'Chidi Okeke',
      avatar: '/images/users/avatar-4.jpg',
    },
    timestamp: new Date('2025-05-16T09:45:00Z'),
    upvotes: 10,
    downvotes: 3,
    replies: [],
  },
]

interface CommentFormProps {
  onSubmit: (content: string) => void
  onCancel?: () => void
  placeholder?: string
}

function CommentForm({
  onSubmit,
  onCancel,
  placeholder = 'Écrire un commentaire...',
}: CommentFormProps) {
  const [content, setContent] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        className='w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 resize-y min-h-[80px]'
        aria-label='Champ de commentaire'
      />
      <div className='mt-2 flex justify-end gap-2'>
        {onCancel && (
          <Button
            type='button'
            variant='outline'
            onClick={onCancel}
            className='text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
          >
            Annuler
          </Button>
        )}
        <Button
          type='submit'
          disabled={!content.trim()}
          className='bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-600'
        >
          Publier
        </Button>
      </div>
    </form>
  )
}

// Comment component
interface CommentProps {
  comment: {
    id: number
    content: string
    user: { name: string; avatar?: string }
    timestamp: Date
    upvotes: number
    downvotes: number
    replies: any[]
  }
  depth?: number
  onReply: (parentId: number, content: string) => void
  onVote: (commentId: number, type: 'upvote' | 'downvote') => void
}

function Comment({ comment, depth = 0, onReply, onVote }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const maxDepth = 3

  const handleReplySubmit = (content: string) => {
    onReply(comment.id, content)
    setIsReplying(false)
  }

  return (
    <div
      className={`mt-4 ${
        depth > 0
          ? 'ml-6 border-l-2 border-gray-200 dark:border-gray-800 pl-4'
          : ''
      }`}
    >
      <div className='flex items-start gap-4'>
        <div className='relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0'>
          {comment.user.avatar ? (
            <Image
              src={comment.user.avatar}
              alt={comment.user.name}
              fill
              className='object-cover'
            />
          ) : (
            <div className='h-full w-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400'>
              {comment.user.name[0]}
            </div>
          )}
        </div>
        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <div>
              <span className='font-medium text-gray-900 dark:text-white'>
                {comment.user.name}
              </span>
              <span className='ml-2 text-sm text-gray-500 dark:text-gray-400'>
                {formatDistanceToNow(comment.timestamp, {
                  addSuffix: true,
                  locale: fr,
                })}
              </span>
            </div>
            {comment.replies.length > 0 && (
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setIsCollapsed(!isCollapsed)}
                aria-label={
                  isCollapsed ? 'Afficher les réponses' : 'Masquer les réponses'
                }
              >
                {isCollapsed ? (
                  <ChevronDown className='h-4 w-4' />
                ) : (
                  <ChevronUp className='h-4 w-4' />
                )}
              </Button>
            )}
          </div>
          <div className='prose prose-sm dark:prose-invert mt-1 text-gray-700 dark:text-gray-300'>
            <p>{comment.content}</p>
          </div>
          <div className='mt-2 flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => onVote(comment.id, 'upvote')}
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                aria-label='Voter pour ce commentaire'
              >
                <ChevronUp className='h-4 w-4' />
                <span className='ml-1'>{comment.upvotes}</span>
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => onVote(comment.id, 'downvote')}
                className='text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                aria-label='Voter contre ce commentaire'
              >
                <ChevronDown className='h-4 w-4' />
                <span className='ml-1'>{comment.downvotes}</span>
              </Button>
            </div>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsReplying(!isReplying)}
              className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              disabled={depth >= maxDepth}
              aria-label='Répondre à ce commentaire'
            >
              <MessageSquare className='h-4 w-4 mr-1' />
              Répondre
            </Button>
            {depth >= maxDepth && (
              <span
                className='text-sm text-gray-500 dark:text-gray-400'
                title='Niveau maximum de réponses atteint'
              >
                (Limite atteinte)
              </span>
            )}
          </div>
          {isReplying && (
            <CommentForm
              onSubmit={handleReplySubmit}
              onCancel={() => setIsReplying(false)}
              placeholder='Écrire une réponse...'
            />
          )}
        </div>
      </div>
      {!isCollapsed && comment.replies.length > 0 && (
        <div className='mt-4'>
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              onReply={onReply}
              onVote={onVote}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface CommentSectionProps {
  postId: number
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments)
  const [isVisible, setIsVisible] = useState(false)
  const [user] = useState({ name: 'Utilisateur Anonyme', avatar: '' }) // Mock logged-in user

  const handleCommentSubmit = (content: string) => {
    const newComment = {
      id: comments.length + 1,
      content,
      user,
      timestamp: new Date(),
      upvotes: 0,
      downvotes: 0,
      replies: [],
    }
    setComments([...comments, newComment])
  }

  const handleReply = (parentId: number, content: string) => {
    const addReply = (comments: any[]): any[] => {
      return comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comments.length + comment.replies.length + 1,
                content,
                user,
                timestamp: new Date(),
                upvotes: 0,
                downvotes: 0,
                replies: [],
              },
            ],
          }
        }
        return { ...comment, replies: addReply(comment.replies) }
      })
    }
    setComments(addReply(comments))
  }

  const handleVote = (commentId: number, type: 'upvote' | 'downvote') => {
    const updateVotes = (comments: any[]): any[] => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            upvotes: type === 'upvote' ? comment.upvotes + 1 : comment.upvotes,
            downvotes:
              type === 'downvote' ? comment.downvotes + 1 : comment.downvotes,
          }
        }
        return { ...comment, replies: updateVotes(comment.replies) }
      })
    }
    setComments(updateVotes(comments))
  }

  return (
    <>
      <Button
        variant='ghost'
        size='sm'
        className='flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
        onClick={() => setIsVisible(!isVisible)}
        aria-label={
          isVisible ? 'Masquer les commentaires' : 'Afficher les commentaires'
        }
      >
        <MessageSquare className='h-4 w-4 mr-1' />
        <span>
          {isVisible
            ? 'Masquer'
            : `Voir tous les ${comments.length} commentaires`}
        </span>
      </Button>
      {isVisible && (
        <div className='mt-12'>
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
            Commentaires ({comments.length})
          </h3>
          <CommentForm onSubmit={handleCommentSubmit} />
          <div className='mt-6 space-y-6'>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                onReply={handleReply}
                onVote={handleVote}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
